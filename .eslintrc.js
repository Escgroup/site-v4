module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: "babel-eslint",
    },
    extends: [
        "@nuxtjs",
        "plugin:nuxt/recommended",
        "prettier",
        "prettier/vue",
        "plugin:prettier/recommended",
    ],
    plugins: ["prettier", "vue", "nuxt"],
    // add your custom rules here
    rules: {
        "prettier/prettier": ["error", require("./.prettierrc.js")],
        "vue/html-indent": ["error", 2],
        semi: ["error", "always"],
        "object-curly-spacing": 2,
    },
};
