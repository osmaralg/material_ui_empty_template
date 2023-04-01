const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8069',
      pathRewrite: {
        '^/api': '', // rewrite path
      },
      changeOrigin: true,
      secure: false,
    })
  );
};