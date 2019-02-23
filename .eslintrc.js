module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  extends: "airbnb",
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "react/jsx-filename-extension": [0]
  }
};
