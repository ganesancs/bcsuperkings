module.exports = {
  webpackDevMiddleware(config) {
    config.watchOptions = {
      ignored: [
        /\.git\//,
        /\.next\//,
        /node_modules/
      ]
    }
    return config;
  }
}
