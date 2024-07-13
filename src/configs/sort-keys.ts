import { config } from "typescript-eslint";
// @ts-expect-error: types not available.
import sortKeys from "eslint-plugin-sort-keys-fix";

import type { Linter } from "eslint";

export default config({
	name: "@ariesclark/eslint-config/sort-keys",
	plugins: { "sort-keys": sortKeys },
	rules: {
		"sort-keys/sort-keys-fix": "warn"
	}
}) as Array<Linter.FlatConfig>;
