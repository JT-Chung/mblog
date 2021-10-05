module.exports = {
    baseUrl: '/', //基本路径
    devServer: {
        open: true,
        host: 'localhost',
        port: 8081,
       /* proxy: {
            /!*!//配置跨域
            '/api':{
                target: "https//www.zengxiaohui.com/",
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    '^/api': ''
                }
            }*!/
        }*/
    }
}
