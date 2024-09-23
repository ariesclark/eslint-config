import PluginImportX from "eslint-plugin-import-x";
import { config } from "typescript-eslint";

import type { TSESLint } from "@typescript-eslint/utils";

export default config({
	extends: [
		// @ts-expect-error: mismatch types.
		PluginImportX.flatConfigs.recommended,
		PluginImportX.flatConfigs.typescript
	],
	files: ["**/*.{js,jsx,ts,tsx}"],
	name: "@ariesclark/eslint-config/import",
	rules: {
		"import-x/default": "off",
		"import-x/extensions": "off",
		"import-x/named": "off",
		"import-x/namespace": "off",
		"import-x/no-anonymous-default-export": "off",
		"import-x/no-empty-named-blocks": "warn",
		"import-x/no-named-as-default": "off",
		"import-x/no-named-as-default-member": "off",
		"import-x/no-self-import": "warn",
		"import-x/no-unresolved": "off",
		"import-x/no-useless-path-segments": "warn",
		"import-x/order": [
			"warn",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
					"type"
				],
				"newlines-between": "always"
			}
		],
		"import-x/prefer-default-export": "off"
	},
	settings: {
		"import-x/cache": {
			lifetime: 5
		}
	}
}) as TSESLint.FlatConfig.ConfigArray;
