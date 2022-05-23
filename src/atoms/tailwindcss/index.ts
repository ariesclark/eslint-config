import { declare } from "../../utils/declare";

export = declare({
	overrides: [
		{
			files: ["**/*.{js,jsx,ts,tsx}"],
			plugins: ["tailwindcss"],
			extends: ["plugin:tailwindcss/recommended"]
		}
	]
});
