function universalLoader (app, options) {
  const universalMiddleware = require('../universal')(options);
  app.use('/', universalMiddleware);
  return app;
}

module.exports = universalLoader;
