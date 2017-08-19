const React = require('react');
const { renderToString } = require('react-dom/server');

function handleUniversalRender(reactElement) {
  return (req, res) => renderToString(reactElement);
}

module.exports = handleUniversalRender;
