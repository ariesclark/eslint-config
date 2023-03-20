import { declare } from "../../utils/declare";

export = declare({
	overrides: [
		{
			files: ["**/*.{js,jsx,ts,tsx}"],
			extends: [
				"plugin:react/recommended",
				"plugin:react/jsx-runtime",
				"plugin:react-hooks/recommended"
			],
			plugins: ["react", "react-hooks"],
			settings: {
				react: {
					version: "detect"
				}
			},
			rules: {
				"react/display-name": "off",
				"react/no-unstable-nested-components": ["warn"],
				"react/self-closing-comp": ["warn"],
				"react/hook-use-state": ["warn"],
				"react/button-has-type": ["warn"],
				"react/jsx-sort-props": [
					"warn",
					{
						ignoreCase: true,
						callbacksLast: true,
						shorthandFirst: true,
						multiline: "last"
					}
				]
			},
			overrides: [
				{
					files: ["**/*.jsx"],
					rules: {
						"react/prop-types": ["warn"]
					}
				},
				{
					files: ["**/*.tsx"],
					rules: {
						/**
						 * This rule is redundant in TypeScript,
						 * since props will have their respective definitions already.
						 */
						"react/prop-types": ["off"]
					}
				}
			]
		}
	]
});
