module.exports = {
    chainWebpack: config => {
        console.log('config', config.plugin('html'))
        config.plugin('html')
            .tap(args => {
                args[0].title = "my-test"
                return args
            })
    },
}
