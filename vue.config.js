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
    },
    pwa: {
        themeColor: '#DB202C',
        msTileColor: '#DB202C',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          swSrc: 'src/service-worker.js',
          exclude: [/_redirects/],
        }
    }
}