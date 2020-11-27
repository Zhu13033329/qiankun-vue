module.exports = {
    devServer: {
        hot: true,
        disableHostCheck: true,
        port: 11000,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    configureWebpack: {
        output: {
            library: `vue app`,
            libraryTarget: 'umd',
        }
    }
}