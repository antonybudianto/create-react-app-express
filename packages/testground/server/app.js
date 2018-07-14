import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
  createReactAppExpress
} from '@cra-express/core';
import App from '../src/App';
import { stringRenderer } from '@cra-express/universal-loader';

const clientBuildPath = path.resolve(__dirname, '../client');
const app = createReactAppExpress({
  clientBuildPath,
  handleRender: stringRenderer,
  universalRender: handleUniversalRender
});

function handleUniversalRender(req, res) {
  const app = (
    <App />
  )
  return ReactDOMServer.renderToString(app);
}

module.exports = app;
