const path = require('path');
const fs = require('fs');
const http = require('http');

function handleDevMode(req, res, options) {
  const { universalRender } = options;

  http.get('http://localhost:3000/index.html', function (result) {
    result.setEncoding('utf8');
    let htmlData = '';
    result.on('data', (chunk) => { htmlData += chunk; });
    result.on('end', () => {
      try {
        processRequest(req, res, htmlData, universalRender);
      } catch (e) {
        console.error(e.message);
        return res.status(404).end();
      }
    });
  }).on('error', function(e) {
    console.error(e.message);
    return res.status(404).end();
  });
}

function universalMiddleware(options) {
  const { clientBuildPath, universalRender } = options;

  function universalLoader(req, res) {
    if (process.env.NODE_ENV === 'development') {
      handleDevMode(req, res, options);
      return;
    }

    const filePath = path.resolve(clientBuildPath, 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
      if (err) {
        console.error('read err', err);
        return res.status(404).end();
      }

      processRequest(req, res, htmlData, universalRender);
    });
  }

  return universalLoader;
}

function processHtmlData(htmlData, markup) {
  return htmlData.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
}

function processRequest(req, res, htmlData, universalRender) {
  const result = universalRender(req, res);

  if (result === undefined) {
    return;
  }

  if (result instanceof Promise) {
    result.then((markup) => {
      if (markup === undefined) {
        return;
      }
      const RenderedApp = processHtmlData(htmlData, markup);
      res.send(RenderedApp);
    });
    return;
  }

  const RenderedApp = processHtmlData(htmlData, result);
  res.send(RenderedApp);
}

module.exports = universalMiddleware;
