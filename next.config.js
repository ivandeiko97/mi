const debug = process.env.NODE_ENV !== "production";
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/cart": { page: "/cart" },
    }
  },
  assetPrefix: !debug ? 'https://ivandeiko97.github.io/mi/' : '',
}