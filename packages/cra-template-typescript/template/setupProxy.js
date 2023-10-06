const { createProxyMiddleware } = require('http-proxy-middleware');

const LOCAL_API_URL = 'http://127.0.0.1:8000';
const SERVICE_API_URL = process.env.API_URL || LOCAL_API_URL;
const LOCAL_MEDIA_URL = process.env.LOCAL_MEDIA_URL;

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: SERVICE_API_URL,
      changeOrigin: true,
      ws: false,
      pathRewrite: {
        '^/api': '/api',
      },
      secure: false,
      headers: {
        Connection: 'keep-alive'
      }
    })
  );
  app.use(
    '/static',
    createProxyMiddleware({
      target: SERVICE_API_URL,
      changeOrigin: true,
      ws: false,
      pathRewrite: {
        '^/static': '/static',
      },
      secure: false,
    })
  );
  app.use(
    '/media',
    createProxyMiddleware({
      target: SERVICE_API_URL === LOCAL_API_URL ? LOCAL_MEDIA_URL : SERVICE_API_URL,
      changeOrigin: true,
      ws: false,
      pathRewrite: {
        '^/media': '/media',
      },
      secure: false,
    })
  );
};
