import globals from "globals";
// @ts-expect-error: types not available.
import PluginUnicorn from "eslint-plugin-unicorn";
import { config } from "typescript-eslint";

import type { TSESLint } from "@typescript-eslint/utils";

export default config(
	{
		languageOptions: {
			globals: globals.builtin
		},
		name: "@ariesclark/eslint-config/unicorn",
		plugins: {
			unicorn: PluginUnicorn
		},
		rules: {
			"unicorn/catch-error-name": ["warn", { name: "reason" }],
			"unicorn/consistent-destructuring": "off",
			"unicorn/no-abusive-eslint-disable": "off",
			"unicorn/no-array-reduce": "off",
			"unicorn/no-await-expression-member": "off",
			"unicorn/no-null": "off",
			"unicorn/no-useless-undefined": ["warn", { checkArguments: false }],
			"unicorn/prefer-number-properties": ["warn", { checkInfinity: false }]
		}
	},
	{
		files: ["**/*.d.ts"],
		rules: {
			"unicorn/prevent-abbreviations": "off"
		}
	}
) as TSESLint.FlatConfig.ConfigArray;
