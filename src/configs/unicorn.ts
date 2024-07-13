import globals from "globals";
import { config } from "typescript-eslint";
// @ts-expect-error: types not available.
import unicorn from "eslint-plugin-unicorn";

import type { Linter } from "eslint";

export default config(
	{
		languageOptions: {
			globals: globals.builtin
		},
		name: "@ariesclark/eslint-config/unicorn",
		plugins: {
			unicorn
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
) as Array<Linter.FlatConfig>;
