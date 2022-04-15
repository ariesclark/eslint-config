module.exports = {
    rules: {
        "yoda": ["warn"],
        "quotes": "off",
        "@typescript-eslint/quotes": ["warn", "double"],
        "jsx-quotes": ["warn", "prefer-double"],

        "unicorn/prevent-abbreviations": "off",

        /* Line endings */

        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["warn", "never"],

        "no-underscore-dangle": "off",
        "comma-style": ["warn", "last"],

        "@typescript-eslint/semi": ["warn", "always"],
        "semi": "off",

        "@typescript-eslint/member-delimiter-style": ["warn", {
            "overrides": {
                "interface": {
                    "multiline": {
                        "delimiter": "semi",
                        "requireLast": false
                    },
                    "singleline": {
                        "delimiter": "semi",
                        "requireLast": false
                    },
                },
                "typeLiteral": {
                    "multiline": {
                        "delimiter": "comma",
                        "requireLast": false
                    },
                    "singleline": {
                        "delimiter": "comma",
                        "requireLast": false
                    },
                }
              }
        }],

        /* Spacing and indention */

        /*
         * This rule is horribly broken. 
         * @see https://github.com/typescript-eslint/typescript-eslint/issues/1824
         */
        "@typescript-eslint/indent": "off",
        "indent": ["warn", "tab", { SwitchCase: 1 }],

        "brace-style": "off",
        "@typescript-eslint/brace-style": ["warn", "1tbs"],

        "no-trailing-spaces": ["warn"],
        "object-curly-spacing": ["warn", "always"],
        "array-bracket-spacing": ["warn", "always"],
        "template-curly-spacing": ["warn", "always"],
        "template-tag-spacing": ["warn", "never"],
        "comma-spacing": ["warn", {
            "before": false, 
            "after": true
        }],
        "arrow-spacing": ["warn", {
            "before": true,
            "after": true
        }],
        "keyword-spacing": ["warn"],
        "key-spacing": ["warn"],

        "arrow-parens": ["warn", "always"],
        "arrow-body-style": ["warn", "as-needed"],

        "space-before-blocks": "off",
        "@typescript-eslint/space-before-blocks": ["warn"],

        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": ["warn"],

        "space-unary-ops": ["warn"],

        "no-tabs": ["warn", {
            allowIndentationTabs: true
        }],

        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": ["warn", "always"],
        
        "space-in-parens": ["warn", "never"],
        "no-multi-spaces": ["warn"],
        "semi-spacing": ["warn", {
            before: false,
            after: false
        }],

        "rest-spread-spacing": ["warn", "never"],

        "operator-linebreak": ["warn", "before"],
        "no-whitespace-before-property": ["warn"],
        "no-multiple-empty-lines": ["warn", {
            "max": 1,
            "maxBOF": 0,
            "maxEOF": 1
        }],

        "dot-location": ["warn", "property"],
        /* Code length */

        "max-len": ["warn", {
            code: 128,
            tabWidth: 0,
            ignoreUrls: true,
            // ignore naturally long jsx element properties
            // like the class name and svg paths.
            ignorePattern: "^.*className|d=\".+\""
        }],

        "@typescript-eslint/array-type": ["warn", {
            default: "generic"
        }],

        "max-lines": ["warn", {
            max: 1000
        }],

        /* Comments */

        "lines-around-comment": ["warn", {
            "beforeBlockComment": true,
            "afterBlockComment": false,
            "allowBlockStart": false,
            "allowBlockEnd": false
        }],

        "spaced-comment": ["warn", "always"],
        "multiline-comment-style": ["warn", "starred-block"],

        /* Class specific rules */

        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": ["warn", "always", {
            exceptAfterSingleLine: true,
            exceptAfterOverload: true
        }],

        "@typescript-eslint/member-ordering": ["warn", {
            default: "never",
            classes: [
                "field",
                "constructor",
                "method"
            ]
        }],

        "@typescript-eslint/explicit-member-accessibility": ["warn", {
            accessibility: "explicit"
        }],
    }
}