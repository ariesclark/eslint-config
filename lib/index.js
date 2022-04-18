const { getProjectRoot } = require("./project")

module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:promise/recommended",
        "plugin:unicorn/recommended",
        "plugin:import/recommended",
        ...[
            "./rules/imports.js",
            "./rules/logical.js",
            "./rules/style.js",
            "./rules/types.js",
        ].map(require.resolve)
    ],
    plugins: [
        "promise",
        "unicorn",
        "import"
    ],
    env: {
        node: true
    },
    overrides: [
        {
            files: ["**/*.{ts,tsx}"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
                tsconfigRootDir: getProjectRoot(),
                project: ["./tsconfig.json"]
            },
            settings: {
                "import/resolver": {
                    typescript: {}
                },
            },
            plugins: [
                "@typescript-eslint"
            ],
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:import/typescript"
            ]
        }
    ]
}