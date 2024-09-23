// @ts-expect-error: types not available.
import PluginReact from "eslint-plugin-react";
// @ts-expect-error: types not available.
import PluginReactHooks from "eslint-plugin-react-hooks";
// @ts-expect-error: types not available.
import ImportPlugin from "eslint-plugin-import";
import { config } from "typescript-eslint";

import type { TSESLint } from "@typescript-eslint/utils";

export default config({
	extends: [
		PluginReact.configs.flat.recommended,
		PluginReact.configs.flat["jsx-runtime"],
		// PluginReactHooks.configs.recommended.rules,
		ImportPlugin.flatConfigs.react
	],
	files: ["**/*.{js,jsx,ts,tsx}"],
	name: "@ariesclark/eslint-config/react",
	plugins: { react: PluginReact, "react-hooks": PluginReactHooks },
	rules: {
		"react/button-has-type": "warn",
		"react/hook-use-state": "warn",
		"react/jsx-sort-props": [
			"warn",
			{
				callbacksLast: true,
				ignoreCase: true,
				multiline: "last",
				shorthandFirst: true
			}
		],
		"react/no-unknown-property": "off",
		"react/no-unstable-nested-components": "warn",
		"react/prop-types": "off",
		"react/self-closing-comp": "warn",
		"unicorn/prevent-abbreviations": [
			"error",
			{
				replacements: {
					// React component convention.
					props: false
				}
			}
		]
	}
}) as TSESLint.FlatConfig.ConfigArray;
