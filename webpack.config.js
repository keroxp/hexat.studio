module.exports = {
  modules: {
    rules: [{
      test: /\.styl$/,
      use: "raw-loader"
    }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  }
};
