module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "rules": {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "react/prop-types": "off",
        "react/jsx-props-no-spreading":"off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "no-undef": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "import/prefer-default-export": ["off"],
        "import/no-default-export": ["error"],
        "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
        "@typescript-eslint/no-explicit-any": ["error"],
        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": ["error", { ignore: [0, 1] }],
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "camelcase": "off",
        "@typescript-eslint/naming-convention": ["error",
            { "selector": "variableLike", "format": ["camelCase", "UPPER_CASE", "PascalCase"] }
        ]
    }
};
