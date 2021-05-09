const  { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/getData",{
      target: "http://localhost:3002",
      changeOrigin: true,
      secure: false, // 是否验证证书
      ws: true, // 启用websocket
    })
  );
  app.use(
    createProxyMiddleware("/auth",{
      target: "http://localhost:3002",
      changeOrigin: true,
      secure: false, // 是否验证证书
      ws: true, // 启用websocket
      })
  );
  app.use(
    createProxyMiddleware("/updateData",{
      target: "http://localhost:3002",
      changeOrigin: true,
      secure: false, // 是否验证证书
      ws: true, // 启用websocket
      })
  );
  app.use(
    createProxyMiddleware("/addData",{
      target: "http://localhost:3002",
      changeOrigin: true,
      secure: false, // 是否验证证书
      ws: true, // 启用websocket
    })
  );
  app.use(
    createProxyMiddleware("/deleteData",{
      target: "http://localhost:3002",
      changeOrigin: true,
      secure: false, // 是否验证证书
      ws: true, // 启用websocket
    })
  );
  app.use(
    createProxyMiddleware("/searchData",{
      target: "http://localhost:3002",
      changeOrigin: true,
      secure: false, // 是否验证证书
      ws: true, // 启用websocket
    })
  );
};