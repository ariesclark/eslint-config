// @ts-expect-error: types not available.
import PluginSortKeys from "eslint-plugin-sort-keys-fix";
import { config } from "typescript-eslint";

import type { TSESLint } from "@typescript-eslint/utils";

export default config({
	name: "@ariesclark/eslint-config/sort-keys",
	plugins: { "sort-keys": PluginSortKeys },
	rules: {
		"sort-keys/sort-keys-fix": "warn"
	}
}) as TSESLint.FlatConfig.ConfigArray;
