module.exports = {
  "env": {
    "browser": true,
  },
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "rules": {
    "no-use-before-define": ["error", { "functions": false, "classes": true }],
    "func-names": ["error", "as-needed"],
    "no-shadow": ["error", { "builtinGlobals": true, "hoist": "functions", "allow": [] }],
    "no-console": "off",
    "max-len": ["error", 120],
    "no-plusplus": "off",
    "linebreak-style": "off",
    "class-methods-use-this": "off",
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": "off"
  }
};