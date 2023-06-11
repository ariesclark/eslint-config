import path from "node:path";

import { declare } from "../../utils/declare";
import { getProjectRoot } from "../../utils/project";

const callees = ["classnames", "clsx", "ctl", "twMerge"];
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
