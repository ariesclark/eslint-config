// @ts-expect-error: types not available.
import PluginTailwindCSS from "eslint-plugin-tailwindcss";
import { config } from "typescript-eslint";

import type { TSESLint } from "@typescript-eslint/utils";

const callees = ["classnames", "clsx", "ctl", "cva", "twMerge", "tv"];

export default config({
	files: ["**/*.{js,jsx,ts,tsx}"],
	name: "@ariesclark/eslint-config/tailwindcss",
	plugins: { tailwindcss: PluginTailwindCSS },
	rules: {
		"tailwindcss/classnames-order": "warn",
		"tailwindcss/enforces-negative-arbitrary-values": "warn",
		"tailwindcss/enforces-shorthand": "warn",
		"tailwindcss/migration-from-tailwind-2": "off",
		"tailwindcss/no-arbitrary-value": "off",
		"tailwindcss/no-contradicting-classname": "error",
		"tailwindcss/no-custom-classname": "warn",
		"tailwindcss/no-unnecessary-arbitrary-value": "warn"
	},
	settings: {
		tailwindcss: {
			callees,
			cssFilesRefreshRate: 5_000,
			removeDuplicates: true,
			skipClassAttribute: false
		}
	}
}) as TSESLint.FlatConfig.ConfigArray;
