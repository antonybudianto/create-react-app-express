const express = require('express');
const staticLoader = require('./loaders/static-loader');
const universalLoader = require('./loaders/universal-loader');

function createReactAppExpress (options) {
  const app = express();
  staticLoader(app, options);
  universalLoader(app, options);
  return app;
}

export default createReactAppExpress;
