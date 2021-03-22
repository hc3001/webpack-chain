// module.exports = {
//     chainWebpack: config => {
//         config.plugin('html')
//             .tap(args => {
//                 args[0].title = "my-test"
//                 return args
//             })
//     },
// }

// 拼接路径
module.exports = {
    outputDir: 'dist', // 默认dist
    indexPath: 'index.html', // Default: 'index.html'
    filenameHashing: true,
    lintOnSave: false,
    devServer: {
        host: 'localhost',
        port: '8087', //代理端口
        https: false,
        open: 'Google Chrome', //项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
        hotOnly: true,
    },
    chainWebpack: (config) => {
        config.plugin('html')
            .tap(args => {
                args[0].title = "my-test"
                return args
            })

        // config.plugins.delete('preload')
    }
}
