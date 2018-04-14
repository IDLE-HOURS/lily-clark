var Markdown = require('markdown-it')
var raw = require('choo/html/raw')

var md = new Markdown()

module.exports = format

function format (str) {
  return raw(md.render(str || ''))
}
