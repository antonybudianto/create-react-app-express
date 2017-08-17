const path = require('path')
const fs = require('fs')

const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')

module.exports = function(clientBuildPath, universalRender) {
  const universalLoader = require('./universal')(clientBuildPath, universalRender)

  const app = express()

  // Support Gzip
  app.use(compression())

  // Support post requests with body data (doesn't support multipart, use multer)
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  // Setup logger
  app.use(morgan('combined'))

  // app.use('/', index)
  app.get('/', universalLoader)

  // Serve static assets
  app.use(express.static(clientBuildPath))

  // Always return the main index.html, so react-router render the route in the client
  app.use('/', universalLoader)

  return app;
}
