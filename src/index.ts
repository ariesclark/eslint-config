import { declare } from "./utils/declare";

export = declare({
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
		"no-sparse-arrays": ["error"],
		"no-eval": ["error"],
		"no-with": ["error"],
		"no-throw-literal": ["error"],
		"no-void": "off",

		"require-atomic-updates": ["error"],
		"symbol-description": ["error"]
	},
	overrides: [
		{
			files: "**/.eslintrc.js",
			extends: [require.resolve("./atoms/node/index.js")]
		}
	]
});
