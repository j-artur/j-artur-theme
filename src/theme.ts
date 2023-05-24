import colors from "./colors";

export default {
  name: "Jartur",
  type: "dark",
  semanticHighlighting: true,
  semanticTokenColors: {
    comment: { foreground: colors.subtext1.hex, fontStyle: "italic" },
    keyword: colors.lavender.hex,
    function: colors.blue.hex,
    method: colors.blue.hex,
    modifier: colors.lavender.hex,
    newOperator: colors.lavender.hex,
    operator: colors.lavender.hex,
    number: colors.teal.hex,
    string: colors.green.hex,
    variable: colors.lavender.hex,
  },
  tokenColors: [],
};
