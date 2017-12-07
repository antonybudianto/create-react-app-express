export default function stringRenderer(req, res, str, htmlData, options) {
  const segments = htmlData.split(`<div id="root">`);
  if (options.onEndReplace) {
    segments[1] = options.onEndReplace(segments[1])
  }
  res.send(`${segments[0]}<div id="root">${str}${segments[1]}`);
}
