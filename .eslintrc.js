module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",  // вкл/викл підсвітку помилки про НЕвикористання перемінної
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        'sourceType': 'module'
    },
    "rules": {
        'no-unused-vars': [
            'warn'
        ]
    }
}
