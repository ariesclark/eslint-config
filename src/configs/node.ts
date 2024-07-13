import globals from "globals";
import { config } from "typescript-eslint";

import type { Linter } from "eslint";

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
}) as Array<Linter.FlatConfig>;
