import { declare } from "./utils/declare";

export = declare({
	ignorePatterns: ["**/node_modules", "**/vendor", "**/dist"],
	extends: [
		"eslint:recommended",
		"plugin:promise/recommended",

		...["./atoms/typescript/index.js", "./atoms/import/index.js", "./atoms/prettier/index.js"].map(
			(value) => require.resolve(value)
		)
	],
	plugins: ["sort-keys", "promise"],
	rules: {
		yoda: ["warn"],
		"no-sparse-arrays": ["warn"],
		"no-eval": ["warn"],
		"no-with": ["warn"],
		"no-throw-literal": ["warn"],
		"no-void": "off",

		"require-atomic-updates": ["warn"],
		"symbol-description": ["warn"]
	},
	overrides: [
		{
			files: "**/{.eslintrc,*.config}.js",
			extends: [require.resolve("./atoms/node/index.js")]
		}
	]
});
