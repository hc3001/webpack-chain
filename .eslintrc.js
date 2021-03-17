module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
        browser: true,
    },
    extends: [
        "plugin:vue/recommended", // 使用 eslint-plugin-vue 插件，并继承 eslint-config-vue 的 recommended 配置
        "@vue/standard", // eslint 继承standard标准
    ],
    plugins: ["html", "vue"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": "off",
        "indent": ["error", 4],
        "no-new-func": 0,
        "no-tabs": "off", //禁tabs 关闭
        "camelcase": "off", //强制驼峰法命名
        "spaced-comment": 0, //注释风格要不要有空格什么的
        "quotes": "off", //引号类型不强制
        "eqeqeq": "off", //去掉等号规范
        "dot-location": 0, //对象访问符的位置，换行的时候在行首还是行尾
        "no-inner-declarations": 0,
        "no-redeclare": 0,
        "no-array-constructor": 0,
        "no-constant-condition": 0,
        "no-mixed-spaces-and-tabs": "off",
        "space-before-function-paren": ["error", "never"], //函数定义时括号前面要不要有空格
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "comma-dangle": "off",
        "handle-callback-err": "off",
        "no-useless-escape": 'off',
        "no-unused-expressions": 'off',
        "vue/html-indent": [
            "error",
            4,
            {
                //对vue indent缩进进行规范
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: 3,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
        "vue/component-definition-name-casing": "off",
        "vue/order-in-components": "off",
        "vue/prop-name-casing": "off", //prop name 命名方式
        "vue/no-mutating-props": "off",
        "vue/require-prop-types": "off",
        "vue/attributes-order": "off",
        "vue/require-default-prop": "off",
        "vue/no-lone-template": "off",
        "vue/no-v-html": "off",
        "vue/name-property-casing": "off"
    },
}
