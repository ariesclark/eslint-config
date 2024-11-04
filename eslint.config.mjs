// To install:
// $ pnpm install -D eslint@9 @ariesclark/eslint-config
// Then copy this example file to your project root and rename it to `eslint.config.mjs`.

import { configure } from "@ariesclark/eslint-config";

export default configure({
	// tailwind: true,
	// react: true,
	// next: true,

	typescript: {
		tsconfigPath: "./tsconfig.json",
		// Overrides for specific plugins.
		overrides: {
			"ts/no-explicit-any": ["error", {
				// "fixToUnknown": true
			}]
		}
	},

	// Ignore files and directories.
	// By default, .gitignore is respected.
	ignores: []
});
