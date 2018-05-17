exports.config = {
  namespace: 'zlib',
  bundles: [{ components: ['z-product-card'] }],
  outputTargets:[
    { 
      type: 'dist' 
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
