module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "import",
    "jsx-a11y",
    "mocha",
  ],
  "extends": ["eslint:recommended", "airbnb"],
  "rules": {
    "mocha/no-exclusive-tests": 2,
    "eqeqeq": [2, "smart"],
    "curly": 2,
    "quotes": [2, "single", "avoid-escape"],
    "strict": 0,
    "no-unused-expressions": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": [2, { "vars": "all", "args": "after-used" }],
    "no-spaced-func" : 0,
    "func-names": 2,
    "no-shadow": 2,
    "camelcase": 1,
    "new-cap": [2, {"capIsNewExceptions": ["Then", "When", "Given", "AfterFeatures", "After", "BeforeFeatures", "Before", "BeforeFeature"]}],
    "dot-notation": 2,
    "no-native-reassign": 1,
    "no-new": 1,
    "no-confusing-arrow": [2, {"allowParens": true}],
    "no-console": 0,
    "no-constant-condition": 1,
    "object-curly-spacing": 1,
    "consistent-return": 2,
    "jsx-quotes": 1,
    "newline-per-chained-call": 0,
    "no-unneeded-ternary": [2, {"defaultAssignment": true }],
    "no-extra-strict": 0,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-catch-shadow": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 0,
    "no-multi-str": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-sequences": 2,
    "no-undef": 2,
    "no-shadow-restricted-names": 2,
    "no-trailing-spaces": 2,
    "quote-props": 2,
    "object-shorthand": 2,
    "prefer-arrow-callback": 2,
    "template-curly-spacing": 0,
    "no-undef-init": 2,
    "id-length": 0,
    "no-use-before-define": 2,
    "no-with": 2,
    "comma-spacing": 2,
    "eol-last": 2,
    "padded-blocks": 0,
    "no-extra-parens": [2, "functions"],
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "new-parens": 2,
    "semi": 2,
    "semi-spacing": [2, {"before": false, "after": true}],
    "space-infix-ops": 2,
    "keyword-spacing": 2,
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "yoda": [2, "never"],
    "indent": 0,
    "vars-on-top": 0,
    "max-len": 0,
    "no-param-reassign": 0,
    "arrow-body-style": 2,
    "brace-style": 2,
    "prefer-template": 2,
    "computed-property-spacing": 1,
    "space-in-parens": 1,
    "no-useless-constructor": 2,
    "prefer-rest-params": 1,
    "array-bracket-spacing": 1,
    "no-case-declarations": 2,
    "array-callback-return": 2,
    "prefer-const": 2,
    "global-require": 2,
    "no-useless-escape": 2,
    "no-restricted-syntax": 2,
    "no-duplicate-imports": [2, { "includeExports": true }],
    "import/no-duplicates": [0, { "commonjs": true }],
    "import/no-unresolved": [0, { "commonjs": true }],
    "import/export": 1,
    "jsx-a11y/img-has-alt": 0,
    "react/jsx-equals-spacing": [1, "never"],
    "react/display-name": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-no-bind": 1,
    "react/jsx-curly-spacing": [2, "always"],
    "react/jsx-first-prop-new-line": [2, "never"],
    "react/jsx-indent": [0, 2],
    "react/jsx-boolean-value": 0,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-space-before-closing": 2,
    "react/no-multi-comp": 1,
    "react/no-unknown-property": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 0,
    "react/wrap-multilines": 0,
    "react/jsx-indent-props": 0,
    "react/prefer-stateless-function": 1,
    "generator-star-spacing": 0,

    // see CPM-2410
    "import/no-extraneous-dependencies": 0,
    "linebreak-style": 2,
    "import/imports-first": 0,
    "react/no-string-refs": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-wrap-multilines": 0,
    "no-mixed-operators": 0,
    "import/prefer-default-export": 0,
    "import/newline-after-import": 0,
    "require-yield": 1,
    "no-extra-boolean-cast": 1,
    "no-continue": 1,
    "object-property-newline": 1,
    "no-prototype-builtins": 1,
    "operator-assignment": 1,
    "jsx-a11y/label-has-for": 1,
    "react/no-find-dom-node": 1,
    "no-lonely-if": 2,
    "dot-location": 2,
    "import/no-named-as-default": 1,
    "prefer-spread": 1
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "ecmaFeatures": {
    "jsx" : true,
    "modules": true
  },
  "globals": {
    "__MOBX_DEVTOOLS__": true,
    "__DEVELOPMENT__": true,
    "__CLIENT__": true,
    "__SERVER__": true,
    "__DISABLE_SSR__": true,
    "__DEVTOOLS__": true,
    "socket": true
  }
}
