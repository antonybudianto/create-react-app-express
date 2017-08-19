const path = require('path');
const fs = require('fs');

function universalMiddleware(options) {
  const { clientBuildPath, universalRender } = options;
  function universalLoader(req, res) {
    const filePath = path.resolve(clientBuildPath, 'index.html')

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
      if (err) {
        console.error('read err', err)
        return res.status(404).end()
      }

      const markup = universalRender(req, res);

      if (markup === null) {
        return;
      }

      const RenderedApp = htmlData.replace('{{SSR}}', markup)
      res.send(RenderedApp)
    })
  }

  return universalLoader;
}

module.exports = universalMiddleware;
