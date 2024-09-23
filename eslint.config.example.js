import { configs, config } from "@ariesclark/eslint-config";
import tailwindcss from "@ariesclark/eslint-config/tailwindcss";
/* You can import any subset by like below: */
// import react from "@ariesclark/eslint-config/react";
import nextjs from "@ariesclark/eslint-config/nextjs";

export default config({
	extends: [
		/***
			The recommended configuration includes the following by default:
		  Promise, TypeScript, Import, Unicorn and Prettier.
		 */
		...configs.recommended,
		// You can selectively include any subsets.
		// ...sortKeys, /* Previously enabled by default, now opt-in. */
		// ...node,
		// ...browser,
		...tailwindcss,
		// ...react,
		...nextjs /* includes: React subset. */
	]
});
