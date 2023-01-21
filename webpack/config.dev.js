const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const FontPreloadPlugin = require('webpack-font-preload-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// Ref: https://github.com/nrwl/nx/issues/3175#issuecomment-644296842
module.exports = (config, context) => {
  nrwlConfig(config);
  console.log(`test`);
  const scssRule = /\.css$|\.scss$|\.sass$|\.less$|\.styl$/.toString();
  config.module.rules.find(
    (rule) => rule.test.toString() === scssRule
  ).exclude = /\.module\.scss$/;

  config.module.rules.push({
    test: /\.module\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[local]__[name]___[hash:base64:5]',
          },
          sourceMap: true,
          importLoaders: 1,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  });

  /**
   * Update svg rule to use svgr and fallback to url-loader
   */
  const assetRuleIndex = config.module.rules.findIndex(({ test }) =>
    test.test('.svg')
  );

  config.module.rules[assetRuleIndex] = {
    test: /\.svg$/,
    use: ['@svgr/webpack?-svgo,+titleProp,+ref', 'url-loader'],
  };

  /**
   * Dev server
   */
  config.devServer = {
    ...config.devServer,
    hot: true,
  };

  return {
    ...config,
    output: {
      ...config.output,
      publicPath: '',
    },
    plugins: [
      ...config.plugins,
      new FontPreloadPlugin(),
      new ReactRefreshPlugin(),
    ],
  };
};
