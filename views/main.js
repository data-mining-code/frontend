const html = require('choo/html')
const fetch = window.fetch

const Input = require('../components/input')
const input = new Input()

const TITLE = 'data mining chatbot'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body> 
      <div class="helvetica mw5 mw7-ns center bg-light-gray pa3 pa5-ns vh-100">
        ${input.render(state.input)}
      </div>
    </body>
  `
}
