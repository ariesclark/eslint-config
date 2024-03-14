# ariesclark/eslint-config

## Usage
Applying the ruleset to your project is quick and easy. You install the package, then create an .eslintrc.js file and select an appropriate project profile.

#### 1. Install the package
To install the package, do this:
```sh
pnpm install -D eslint typescript @ariesclark/eslint-config
```

#### 2. Configure the linter
Create an .eslintrc.js config file that provides the Node.js ``__dirname`` context for TypeScript, as shown below:

##### .eslintrc.js
```js
require("@ariesclark/eslint-config/eslint-patch");
process.env["ESLINT_PROJECT_ROOT"] = __dirname;

module.exports = {
  root: true,
  extends: [
    "@ariesclark/eslint-config",
    "@ariesclark/eslint-config/react",
    // "@ariesclark/eslint-config/next" // Uncomment if using Next.js, includes React automatically.
    "@ariesclark/eslint-config/tailwindcss",
  ]
};
```