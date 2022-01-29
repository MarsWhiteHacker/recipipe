module.exports = function (api) { // eslint-disable-line func-names
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '^~(.+)': './src/\\1',
          },
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.json',
            '.tsx',
            '.ts',
            '.native.js',
          ],
        },
        '@babel/plugin-proposal-export-namespace-from',
      ],
    ],
  };
};
