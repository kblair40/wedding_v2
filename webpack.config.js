const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.NormalModuleReplacementPlugin(
      /leaflet\/dist\/leaflet-src\.js/,
      "./leaflet/dist/leaflet.js"
    ),
  ],
};
