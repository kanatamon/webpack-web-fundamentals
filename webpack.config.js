const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

const addons = (addonsArg) => {
  let addons = []
      .concat.apply([], [addonsArg])  // Normalize array of addons (flatten)
      .filter(Boolean);               // If addons is undefined, filten it out

  return addons.map(addonName => require(`./build-utils/addons/webpack.${addonName}`));
};

module.exports = (env) => {
  if (!env) {
    throw new Error('You must pass an --env flag into your build for webpack to work !');
  }

  const envConfig = require(`./build-utils/webpack.${env.env}`);
  const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons));

  return mergedConfig;
};
