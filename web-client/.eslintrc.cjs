module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [
            true,
            {
                'ignoreAtRules': ['tailwind']
            }
        ],
    }
}
