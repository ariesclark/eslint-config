import globals from "globals";
import { config } from "typescript-eslint";

import type { TSESLint } from "@typescript-eslint/utils";

export default config({
	languageOptions: {
		globals: {
			...globals.node,
			...globals.nodeBuiltin
		}
	},
	name: "@ariesclark/eslint-config/node",
	rules: {
		"unicorn/prefer-module": "off"
	}
}) as TSESLint.FlatConfig.ConfigArray;
