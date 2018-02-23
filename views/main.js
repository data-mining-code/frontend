const html = require('choo/html')
const fetch = window.fetch

const TITLE = 'data mining chatbot'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  function onsubmit (evt) {
    if (evt.key === 'Enter') {
      emit('input:submit', evt.target.value)
      fetch(`http://${process.env.HOSTNAME}:3030/api/request?input=${state.input.text}`)
        .then(res => res.json())
        .then(body => {
          emit('output:submit', body.text)
        })
    }
  }

  return html`
    <body class="helvetica">
      <header class="vh-100 bg-light-pink dt w-100">
        <div class="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1 class="f2 f-subheadline-l mt0 measure lh-title fw9">${state.output.text}</h1>
          <input
            class="f3 f2-l helvetica bg-light-pink bt-0 bl-0 br-0 bb b--navy navy pb2 vw-100"
            placeholder="Ask me a question..."
            autofocus
            onkeyup=${onsubmit}
          />
        </div>
      </header>
    </body>
  `
}
