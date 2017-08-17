const path = require('path');
const fs = require('fs');

const { renderToString } = require('react-dom/server');

module.exports = function (clientBuildPath, universalRender) {
  function universalLoader(req, res) {
    const filePath = path.resolve(clientBuildPath, 'index.html')

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
      if (err) {
        console.error('read err', err)
        return res.status(404).end()
      }

      const markup = universalRender(req, res, renderToString)

      if (markup === undefined) {
        return;
      }

      const RenderedApp = htmlData.replace('{{SSR}}', markup)
      res.send(RenderedApp)
    })
  }

  return universalLoader;
}
