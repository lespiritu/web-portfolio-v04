const getDevConfig = require('./config.dev');

module.exports = (config, context) => {
  const customConfig =
    config.mode === 'production' ? getDevConfig : getDevConfig;

  return customConfig(config, context);
};
