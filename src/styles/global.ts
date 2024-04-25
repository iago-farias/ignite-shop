import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: "$gray900",
    color: "$gray100"
  },

  'body, input, textarea, button': {
    fontFamily: "Roboto",
    fontWeight: 400
  }
})