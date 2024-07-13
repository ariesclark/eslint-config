import { config } from "typescript-eslint";

import type { Linter } from "eslint";

export default config({
	name: "@ariesclark/eslint-config/browser"
}) as Array<Linter.FlatConfig>;
