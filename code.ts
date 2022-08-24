// This plugin lets you generate the proper st. commands with their corresponding
// properties, from our existing component library

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Initialize the object to hold the component global props.
let globalProps: {
  disabled?: boolean;
  label: string,
  help?: string;
};

// On this overrides array we'll collect the changes to make on globalProps,
// based on what the user added/modified/removed from the Figma component
const overrides: object[] = [];

// Function to generate the markup for the selected item
const generateMarkup = (component: any, props: any) => {
  
  // TBD: More resilient code
  const labelIndex = props.findIndex((prop: any) => prop.label !== undefined);
  const valueIndex = props.findIndex((prop: any) => prop.value !== undefined);
  const disabledIndex = props.findIndex((prop: any) => prop.disabled !== undefined);
  let label;
  let disabled;
  let value;

  if(labelIndex > -1) {
    label = props.splice(labelIndex, 1);
  }
  
  if(valueIndex > -1) {
    value = props.splice(valueIndex, 1);
  }

  if(disabledIndex > -1) {
    props.splice(disabledIndex, 1);
    disabled = 'disabled=True';
  }

  // The order for the parameters is important:
  // For inputs, label goes first, value goes after,
  // Then all the other keyword arguments
  const markup = `
    ${component.name}(
      ${label ? `'${Object.values(label[0])}',` : ''}
      ${value ? `'${Object.values(value[0])}',` : ''}
      ${disabled ? `${disabled},` : ''}
      ${props.map((prop: any) => `${Object.keys(prop)}='${Object.values(prop)}', `).join('')}
    )
  `;

  return markup;
}

// Function to get the content for the visible node
const getNodeContent = (item: any) => {

  // Do different stuff based on the type of node
  switch(item.type) {

    // If text, easy peasy
    case 'TEXT':
      const name = item.name;
      const content = item.content.characters;

      overrides.push({
        [name]: content
      });
      break;

    // If a frame, auto layout, etc, get the text nodes inside of them
    case 'FRAME':
      const textNodes = item.content.findAllWithCriteria({ types: ['TEXT']})
      textNodes.map((node: any) => {
        const name = node.name.toLowerCase();
        const content = node.characters;

        overrides.push({
          [name]: content
        });
      })
      break;
  }
}

// Function to check the node visibility
const checkVisibility = (node: any) => {
  
  // First, we check if the current node we are traversing is visible
  const isParentVisible = node.visible;

  // If it is, then check its descendants, and return their name and visibility
  if(isParentVisible) {
    let nodeList: object[] = [];
    
    // TBD: More thorough check for label_visibility,
    // and better handling for help tooltip group
    node.children.map((children: any) => nodeList.push({
      name: children.name.toLowerCase(),
      visible: children.visible,
      type: children.type,
      content: children
    }));

    return nodeList;
  } else {
    return;
  }
}

// Function to gather the values for the common props all our components have
const getGlobalProps = (node: any) => {
  
  // Get the component variants, since some of the arguments
  // are added there, such as "Disabled=True"
  for (const property in node.variantProperties) {

    // Get all the possible variations and add them to the props object
    switch(property.toLowerCase()) {
      case 'disabled':
        const isDisabled = node.variantProperties[property].toLowerCase() === 'true';
        if(isDisabled) overrides.push({ disabled: isDisabled });
        break;
    }
  }

  // After the variants, get the component children, and update values depending on its state and values
  for (const index in node.children) {

    // Check the visible attribute in Figma. If the group (or any of its children)
    // is not visible, that means the user don't want those properties
    // on their code, so we can exit the function and set them to false.
    const nodeList = checkVisibility(node.children[index]);
    nodeList?.map((item: any) => {
      
      // If the item is visible, let's get the content for it
      if(item.visible === true) {
        getNodeContent(item);
      }

      // If the label is invisible, set the override to an empty string
      // TBD handle this with label_visibility once it ships
      else if(item.visible === false && item.name === 'label') {
        overrides.push({
          label: ''
        });
      }
      else {
        return;
      }
    });
  }
};

// Function to traverse the selected nodes and identify the widgets
const traverse = (node: any) => {

  // If there are no childrens, that means we selected an empty element.
  // If the node is not a component, throw an error to avoid funky behavior and edge cases.
  if ("children" in node && node.type === "COMPONENT") {
    
    // Selection is valid, let's id the component!
    identifyComponent(node);
  } else {

    // Throw an error if invalid selection
    figma.ui.postMessage({
      type: 'error',
      message: 'Invalid selection! Please select a top-level component from the library to generate the code.'
    })
    return;
  };
};

// Function to identify the component and get its data
const identifyComponent = (node: any) => {

  // Get the parent's information
  const parent = node.parent;
  const component = {
    name: parent.name,
    description: parent.description,
    link: parent.documentationLinks[0].uri
  };

  // Go through the selected component and get its global properties
  getGlobalProps(node);

  // TBD: Get component-specific props

  // Generate the markup for the component
  const markup = generateMarkup(component, overrides);

  // Send a success message to the plugin with the data
  figma.ui.postMessage({
    type: 'success',
    message: 'Nice one! Find the code snippet below 👇🏻',
    component,
    markup
  });
};

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {

  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.

  // If the type is 'identify-widget', then that's what we do!
  if (msg.type === 'identify-widget') {
    
    // If there's nothing selected, throw an error
    if(!figma.currentPage.selection.length) {
      figma.ui.postMessage({
        type: 'error',
        message: 'Nothing selected! Please pick a component to get its code.'
      });
      return;
    } else {

      // Traverse the selected nodes and get their information
      for (const node of figma.currentPage.selection) {
        traverse(node);
      };
    };
  }
  // If the type is clean-old-data, then let's wipe the old overrides
  else if(msg.type === 'clean-old-data') {
    overrides.splice(0, overrides.length);
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // Commented out for now for easier development flow
  // figma.closePlugin();
};