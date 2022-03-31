# @ariesclark/eslint-config 🚀🎨
An opinionated (and clearly the best) eslint configuration.

## Usage
Applying the ruleset to your project is quick and easy. You install the package, then create an .eslintrc.js file and select an appropriate project profile.

#### 1. Install the package
To install the package, do this:
```sh
npm install -D eslint typescript @ariesclark/eslint-config
```

#### 2. Configure the linter
Create an .eslintrc.js config file that provides the Node.js ``__dirname`` context for TypeScript, as shown below:

##### .eslintrc.js
```js
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@ariesclark/eslint-config/modern-module-resolution");

module.exports = {
    root: true,
    extends: ["@ariesclark/eslint-config"],
    parserOptions: {
        tsconfigRootDir: __dirname
    }
};
```