import { FlatCompat } from "@eslint/eslintrc";
import { config } from "typescript-eslint";

import type { Linter } from "eslint";

import "eslint-plugin-import";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
	recommendedConfig: {}
});

export default config({
	extends: [...compat.extends("plugin:import/typescript")],
	files: ["**/*.{js,jsx,ts,tsx}"],
	name: "@ariesclark/eslint-config/import",
	plugins: compat.plugins("import")[0].plugins,
	rules: {
		"import/default": "off",
		"import/extensions": "off",
		"import/named": "off",
		"import/namespace": "off",
		"import/no-anonymous-default-export": "off",
		"import/no-empty-named-blocks": "warn",
		"import/no-named-as-default": "off",
		"import/no-named-as-default-member": "off",
		"import/no-self-import": "warn",
		"import/no-unresolved": "off",
		"import/no-useless-path-segments": "warn",
		"import/order": [
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
		"import/prefer-default-export": "off"
	},
	settings: {
		"import/cache": {
			lifetime: 5
		}
	}
}) as Array<Linter.FlatConfig>;
