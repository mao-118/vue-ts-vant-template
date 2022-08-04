module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "always"], //结尾使用分号
        "quotes": ["error", "single", { "avoidEscape": true }], //使用单引号
        "vue/multi-word-component-names": "off", //屏蔽组件名多个单词
        "@typescript-eslint/no-explicit-any": "off", //去除ts any类型警告
        "no-await-in-loop": "error", //禁止循环中出现await
        "eqeqeq": [2, "always"],//要求使用 === 和 !==
        "max-len": [2, {  //最大行数
            "code": 300,
            "tabWidth": 4
        }],
        "max-lines": [2, { //最大行数
            "max": 800,
            "skipBlankLines": true,
            "skipComments": true
        }]
    }
}
