export const data = [
  // Write and magic
  {
    "category": "write-and-magic",
    "name": "st.write",
    "parameters": [
      {
        "name": "args",
        "type": "any",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "unsafe_allow_html",
        "type": "bool",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  // Text widgets
  {
    "category": "text",
    "name": "st.title",
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "anchor",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "text",
    "name": "st.header",
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "anchor",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "text",
    "name": "st.subheader",
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "anchor",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "text",
    "name": "st.caption",
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "unsafe_allow_html",
        "type": "bool",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "text",
    "name": "st.markdown",
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "unsafe_allow_html",
        "type": "bool",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "text",
    "name": "st.text",
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
    ]
  },
  {
    "category": "text",
    "name": "st.latex",
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
    ]
  },
  {
    "category": "text",
    "name": "st.code",
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "language",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": false
      },
    ]
  },
  // Input widgets
  {
    "category": "widgets",
    "name": "st.button",
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_click",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.download_button",
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "data",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "file_name",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "mime",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_click",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.checkbox",
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "value",
        "type": "bool",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.radio",
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "options",
        "type": "sequence",
        "defaultValue": "[]",
        "required": true,
        "keyValue": false
      },
      {
        "name": "index",
        "type": "int",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "format_func",
        "type": "function",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "horizontal",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.selectbox",
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "options",
        "type": "sequence",
        "defaultValue": "[]",
        "required": true,
        "keyValue": false
      },
      {
        "name": "index",
        "type": "int",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "format_func",
        "type": "function",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.text_input",
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "value",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "placeholder",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "max_chars",
        "type": "int",
        "defaultValue": 0,
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "type",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "autocomplete",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
]