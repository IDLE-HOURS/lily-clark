var css = require('sheetify')
var choo = require('choo')
var wrapper = require('./views/wrapper')

// styles
css('nanoreset')
css('./index.css')

// our app
var app = choo()
app.use(require('enoki/choo')())
app.use(require('./plugins/archive')())

app.route('*', wrapper(require('./views/default')))
app.route('/', wrapper(require('./views/slideshow')))
app.route('/archive', wrapper(require('./views/archive')))
app.route('/archive/:entry', wrapper(require('./views/archive')))
app.route('/archive/:entry/:name', wrapper(require('./views/solo')))

// start
if (!module.parent) app.mount('body')
else module.exports = app
