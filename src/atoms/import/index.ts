import { declare } from "../../utils/declare";

export = declare({
	overrides: [
		{
			files: ["**/*.{js,jsx,ts,tsx}"],
			extends: ["plugin:import/recommended"],
			plugins: ["import"],
			rules: {
				"import/prefer-default-export": "off",
				"import/no-anonymous-default-export": "off",
				"import/named": "off",
				"import/namespace": "off",
				"import/default": "off",
				"import/no-named-as-default": "off",
				"import/no-unresolved": "off",
				"import/no-self-import": "warn",
				"import/no-empty-named-blocks": "warn",
				"import/no-useless-path-segments": "warn",
				"import/no-named-as-default-member": "off",
				"import/order": [
					"warn",
					{
						"newlines-between": "always",
						groups: [
							"builtin",
							"external",
							"internal",
							"parent",
							"sibling",
							"index",
							"object",
							"type"
						]
					}
				]
			}
		}
	]
});
