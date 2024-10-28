# ariesclark/eslint-config

> This package requires ESLint v9 or later and is incompatible with earlier versions. If you're using an older version of ESLint, please upgrade to the latest version or use version 1.x of this package.

## Usage
Applying the ruleset to your project is quick and easy. You install the package, then create an eslint.config.mjs file and select an appropriate project profile.

#### 1. Install the package
To install the package, do this:
```sh
pnpm install -D eslint@9 typescript @ariesclark/eslint-config
```

#### 2. Configure the linter
Create an eslint.config.mjs config file, as shown below:

##### eslint.config.mjs (ESLint v9+)
```js
import { config, configs } from "@ariesclark/eslint-config";
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
```
