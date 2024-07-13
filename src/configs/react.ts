import { config } from "typescript-eslint";
// @ts-expect-error: types not available.
import react from "eslint-plugin-react";

import type { Linter } from "eslint";

export default config({
	files: ["**/*.{js,jsx,ts,tsx}"],
	name: "@ariesclark/eslint-config/react",
	plugins: { react },
	// extends: [
	// 	react.configs.recommended,
	// 	config({
	// 		files: ["**/*.{jsx,tsx}"],
	// 		extends: [
	// 			react.configs["jsx-runtime"]
	// 		],
	// 		rules: {
	// 			"react/self-closing-comp": "warn",
	// 			"react/jsx-sort-props": [
	// 				"warn",
	// 				{
	// 					ignoreCase: true,
	// 					callbacksLast: true,
	// 					shorthandFirst: true,
	// 					multiline: "last"
	// 				}
	// 			],
	// 			"react/no-unknown-property": "off",
	// 			"unicorn/prevent-abbreviations": [
	// 				"error",
	// 				{
	// 					replacements: {
	// 						// React component convention.
	// 						props: false
	// 					}
	// 				}
	// 			]
	// 		}
	// 	}),
	// ],
	// extends: [
	// 	"plugin:react/recommended",
	// 	"plugin:react/jsx-runtime",
	// 	"plugin:react-hooks/recommended"
	// ],
	// plugins: ["react", "react-hooks"],
	rules: {
		"react/button-has-type": "warn",

		"react/hook-use-state": "warn",
		// "react/display-name": "off",
		"react/no-unstable-nested-components": "warn",
		"react/prop-types": "off"
	}
}) as Array<Linter.FlatConfig>;
