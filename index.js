var css = require('sheetify')
var choo = require('choo')
var inputStore = require('./stores/input')
var outputStore  = require('./stores/output')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.use(inputStore)
app.use(outputStore)

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

if (!module.parent) app.mount('body')
else module.exports = app
