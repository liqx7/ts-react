const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.pro.config");

module.exports = (env, argv) => {
  console.log(`------argv,argv.mode------`);
  console.log(argv, argv.mode);
  let config = argv.mode === "development" ? devConfig : proConfig;

  console.log(`------config------`);
  console.log(config);
  return merge(baseConfig, config);
};
