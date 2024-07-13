import { config, type Config } from "typescript-eslint";
// @ts-expect-error: types not available.
import tailwindcss from "eslint-plugin-tailwindcss";

export default config({
	files: ["**/*.{js,jsx,ts,tsx}"],
	name: "@ariesclark/eslint-config/tailwindcss",
	plugins: { tailwindcss },
	rules: {
		"tailwindcss/classnames-order": "warn",
		"tailwindcss/no-contradicting-classname": "warn",
		"tailwindcss/no-custom-classname": "warn"
	}
}) as Config;
