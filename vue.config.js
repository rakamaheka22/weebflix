const Dotenv = require('dotenv-webpack');

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "./src/assets/scss/variables.scss";`
            }
        }
    },
    configureWebpack: {
        plugins: [
            new Dotenv()
        ]
    }
}