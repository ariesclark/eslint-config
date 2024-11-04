Here"s a refined version of your README:

---

# ariesclark/eslint-config

> **Note:** This package requires ESLint v9 or higher and is not compatible with earlier versions. If you"re using an older version of ESLint, please upgrade to the latest release or use version 1.x of this package.

![ariesclark logo](https://files.aries.fyi/2024/11/04/428698c66455f22f.gif)

## Key Features
- **Zero Configuration**: Ready to use immediately without setup.
- **Highly Customizable**: Easily extendable to fit specific project needs.

## Installation

To add this configuration to your project, run:
```sh
pnpm install -D eslint@9 @ariesclark/eslint-config
```

Copy the [example configuration file](./eslint.config.mjs) into your project’s root directory:
```sh
cp node_modules/@ariesclark/eslint-config/eslint.config.mjs .
```

Customize `eslint.config.mjs` as needed for your project.

### Presets

<details>
	<summary>Next.js with Tailwind.css</summary>

```js
// eslint.config.js
import { configure } from "@ariesclark/eslint-config";

export default configure({
	next: true,
	tailwind: true,
	typescript: {
		tsconfigPath: "./tsconfig.json",
	}
});
```
</details>

### Examples

Normally you only need to import the configure preset:
```js
// eslint.config.js
import { configure } from "@ariesclark/eslint-config";

export default configure({
	/* options */
});
```

And that's it! Or you can configure each integration individually, for example:
```js
// eslint.config.js
import { configure } from "@ariesclark/eslint-config";

export default configure({
	// Type of the project. "lib" for libraries, the default is "app"
	type: "app",

	// Disable stylistic formatting rules
	// stylistic: false,

	// Or customize the stylistic rules
	stylistic: {
		indent: "tab", // "tab", or a number.
		quotes: "double", // or "single"
	},

	// TypeScript and Vue are autodetected, you can also explicitly enable them:
	typescript: true,
	vue: true,

	// And even, disable jsonc and yaml support.
	jsonc: false,
	yaml: false,

	// `.eslintignore` is no longer supported in flat config, use `ignores` instead.
	ignores: [
		"**/fixtures",
		// ...globs
	]
});
```

## Running ESLint

To run ESLint with this configuration:
- You may need to install ESLint globally to use the `eslint` command directly, or use `pnpx eslint` for a project-local setup.
- When prompted to install any required plugins or parsers, follow the instructions. **It’s best to complete this setup before starting your language server.**

```sh
eslint .
```

### Advanced Usage
For complex documentation, see the [@antfu/eslint-config](https://github.com/antfu/eslint-config), which this package is based on.
