// 反向代理配置文件
const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(proxy('/bianque',
    {
      // target: 'http://bianque.aliyun-inc.com', // 正式服
      target: 'http://11.239.149.129', // 正式服
      // target: 'http://11.164.61.51:9032', // 测试服
      // target: 'http://11.159.52.249:8000', // 测试服
      secure: false,
      changeOrigin: true,
      pathRewrite: { '^/bianque': '/' },
      timeout: 1000 * 1000 * 20
    }))
}
