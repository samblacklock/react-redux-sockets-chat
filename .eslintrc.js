module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-unresolved": [ 2, { "caseSensitive": false }],
        "import/extensions": 0,
        "import/no-extraneous-dependencies": 0,
        "global/require": 0,
        "comma-dangle": ["error", "never"],
        "no-confusing-arrow": ["error", {"allowParens": true}]
    }
};