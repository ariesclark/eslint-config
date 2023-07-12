import path from "node:path";

import { declare } from "../../utils/declare";
import { getProjectRoot } from "../../utils/project";

/**
 * Functions that are used to merge Tailwind classes, e.g. `twMerge` from
 * https://npm.im/tailwind-merge or `cva` from https://npm.im/class-variance-authority,
 *
 * These need to be added to the `callees` array so that the plugin can
 * detect when they are being used, by default, the plugin will only
 * read classes within the `className` property.
 */
const callees = ["twMerge", "cva"];

const config = path.relative(
	process.cwd(),
	path.resolve(getProjectRoot(), "tailwind.config.js")
);

const options = {
	callees,
	config
};

export = declare({
	overrides: [
		{
			files: ["**/*.{js,jsx,ts,tsx}"],
			plugins: ["tailwindcss"],
			extends: ["plugin:tailwindcss/recommended"],
			rules: {
				"tailwindcss/no-custom-classname": ["warn", options],
				"tailwindcss/no-contradicting-classname": ["warn", options],
				"tailwindcss/classnames-order": ["warn", options]
			}
		}
	]
});
