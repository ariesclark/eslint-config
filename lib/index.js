module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
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
        "@typescript-eslint",
        "promise",
        "unicorn",
        "import"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        project: ["./tsconfig.json"]
    }
}