module.exports = {
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = "my-test"
                return args
            })
        console.log('config', config.toString())
    },
}
