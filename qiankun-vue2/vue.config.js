module.exports = {
    devServer: {
        hot: true,
        disableHostCheck: true,
        port: 21000,
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