import createUniversalMiddleware from './universal'

function universalLoader(app, options) {
  const universalMiddleware = createUniversalMiddleware(options);
  app.use('/', universalMiddleware);
  return app;
}

export default universalLoader;
