const html = require('choo/html')

const Input = require('../components/input')
const Message = require('../components/message')

const TITLE = 'data mining chatbot'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  const input = new Input(state, emit)

  return html`
    <body style="background-color: #33578e">
      <div class="helvetica f3 mw5 mw7-ns center bg-light-gray pa3 pa5-ns vh-100">
        ${state.messages.map(msg => {
          const message = new Message()
          return html`
            ${message.render(msg)}
          `
        })}
      </div>

      <div class="fixed center f3 pb4" style="bottom:0;left: 0;right: 0; width: 31%">
        ${input.render()}
      </div>
    </body>
  `
}
