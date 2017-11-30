const createReactAppExpress = require('./app');
const handleUniversalRender = require('./handle-universal-render');
const staticLoader = require('./loaders/static-loader');
const universalLoader = require('./loaders/universal-loader');

module.exports = {
  createReactAppExpress: createReactAppExpress,
  handleUniversalRender: handleUniversalRender,
  staticLoader: staticLoader,
  universalLoader: universalLoader
};
