module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:promise/recommended",
        "plugin:import/recommended"
    ],
    plugins: [
        "@typescript-eslint",
        "promise",
        "import"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: ["./tsconfig.json"]
    },
    rules: {
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/consistent-type-definitions": "warn",

        "import/prefer-default-export": "off",
        "import/no-anonymous-default-export": "off",
        "import/order": ["warn", {
            "newlines-between": "always",
            groups: [
                "builtin",
                "external",
                "internal",
                "parent",
                "sibling",
                "index",
                "object",
                "type"
            ]
        }],

        "no-sparse-arrays": "error",
        "no-eval": "error",
        "no-void": "error",
        "no-with": "error",

        "no-throw-literal": "error",
        "require-atomic-updates": "error",

        // Stylistic choices
        semi: ["warn", "always"],
        "object-curly-spacing": ["warn", "always"],
        indent: ["warn", "tab", { SwitchCase: 1 }],
        // this rule is broken.
        // see: https://github.com/typescript-eslint/typescript-eslint/issues/1824
        "@typescript-eslint/indent": "off",
        "no-tabs": ["warn", { allowIndentationTabs: true }],

        "max-len": ["warn", {
            code: 128,
            tabWidth: 0,
            ignoreUrls: true,
            // ignore naturally long jsx element properties
            // like the class name and svg paths.
            ignorePattern: "^.*className|d=\".+\""
        }],


        // long files should be separated into multiple files.
        "max-lines": ["warn", { max: 1000 }],

        quotes: "off",
        "@typescript-eslint/quotes": ["warn", "double"],

        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": ["warn", "always"],

        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["warn", "never"],
        "no-underscore-dangle": "off",

        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": ["warn", "always", {
            exceptAfterSingleLine: true,
            exceptAfterOverload: true
        }],

        "@typescript-eslint/member-ordering": ["warn", {
            default: "never",
            classes: ["field", "constructor", "method"]
        }],

        "@typescript-eslint/explicit-member-accessibility": ["warn", {
            accessibility: "explicit"
        }],

        "arrow-body-style": ["warn", "as-needed"],
    },
}