const css = require('sheetify')
const choo = require('choo')
const messagesStore = require('./stores/messages')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.use(messagesStore)

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))
app.route('/index.html', require('./views/main'))

if (!module.parent) app.mount('body')
else module.exports = app
