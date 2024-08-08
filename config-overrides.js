const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    // 解决弃用警告的问题
    if (config.devServer) {
      config.devServer.setupMiddlewares = (middlewares, devServer) => {
        if (typeof config.devServer.before === 'function') {
          config.devServer.before(devServer.app, devServer);
        }

        return middlewares;
      };
    }

    return config;
  }
);