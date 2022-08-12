module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "./.eslintrc-auto-import.json", //自动导入组合api
        "eslint:recommended", //开启默认的eslint基础校验
        'plugin:vue/vue3-recommended', //开启vue3校验
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended" //ts
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
        "no-var": "error", //禁用var
        "semi": ["error", "always"], //结尾使用分号
        "quotes": ["error", "single", { "avoidEscape": true }], //使用单引号
        "vue/multi-word-component-names": "off", //屏蔽组件名多个单词
        "@typescript-eslint/no-explicit-any": "warn", //去除ts any类型警告
        "no-await-in-loop": "error", //禁止循环中出现await
        "eqeqeq": [2, "always"],//要求使用 === 和 !==
        "max-len": [2, {  //强制一行的最大长度
            "code": 300
        }],
        "max-lines": [2, { //最大行数
            "max": 800,
            "skipBlankLines": true,
            "skipComments": true
        }],
        "comma-dangle": [2, "never"], //末尾不适用逗号
        "array-bracket-newline": ["error", { "multiline": true }], //数组前后空格
        "space-infix-ops": "error", //操作符前后空格
        "vue/max-attributes-per-line": ["off"]
    }
}
