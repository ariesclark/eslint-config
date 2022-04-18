# runes-security/eslint-config

## Usage
Applying the ruleset to your project is quick and easy. You install the package, then create an .eslintrc.js file and select an appropriate project profile.

#### 1. Install the package
To install the package, do this:
```sh
npm install -D eslint @runes-security/eslint-config
```

#### 2. Configure the linter
Create an .eslintrc.js config file that provides the Node.js ``__dirname`` context for TypeScript, as shown below:

##### .eslintrc.js
```js
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@runes-security/eslint-config/modern-module-resolution");

module.exports = {
    root: true,
    extends: ["@runes-security/eslint-config"],
    parserOptions: {
        tsconfigRootDir: __dirname
    }
};
```