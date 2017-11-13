const commonConfig = require('./build-utils/webpack.common');

module.exports = (env) => {
  console.log(env);
  
  return commonConfig;
};