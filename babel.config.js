const developmentEnvironments = ['development', 'test'];

module.exports = function(api) {
  const development = api.env(developmentEnvironments);

  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          targets: { electron: require('electron/package.json').version },
          useBuiltIns: 'usage',
        },
      ],
      [require('@babel/preset-react'), { development }],
    ],
  };
};
