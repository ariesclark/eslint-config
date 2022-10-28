![GitHub image](https://raphtalia.ariesclark.com/github/ariesclark/eslint-config/banner?)

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
require("@ariesclark/eslint-config/eslint-patch");

module.exports = {
  root: true,
  extends: ["@ariesclark/eslint-config"],
  parserOptions: {
  project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
};
```