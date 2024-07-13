# ariesclark/eslint-config

> This package requires ESLint v9 or later and is incompatible with earlier versions. If you're using an older version of ESLint, please upgrade to the latest version or use version 1.x of this package.

## Usage
Applying the ruleset to your project is quick and easy. You install the package, then create an .eslintrc.js file and select an appropriate project profile.

#### 1. Install the package
To install the package, do this:
```sh
pnpm install -D eslint@9 typescript @ariesclark/eslint-config
```

#### 2. Configure the linter
Create an .eslintrc.js config file that provides the Node.js ``__dirname`` context for TypeScript, as shown below:

##### eslint.config.js
```js
export default {
  root: true,
  extends: [
    "@ariesclark/eslint-config",
    "@ariesclark/eslint-config/react",
    // "@ariesclark/eslint-config/next" // Uncomment if using Next.js, includes React automatically.
    "@ariesclark/eslint-config/tailwindcss",
  ]
};
```