module.exports = (env) => {
  console.log(env);
  return {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
    },
  };
};