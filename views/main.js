const html = require('choo/html')

const TITLE = '🚂🚋🚋'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  function onsubmit (evt) {
    if (evt.key === 'Enter') {
      emit('input:submit', evt.target.value)
      emit('output:submit', state.input.text)
    }
  }

  return html`
    <body class="helvetica">
      <header class="vh-100 bg-light-pink dt w-100">
        <div class="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1 class="f2 f-subheadline-l mt0 measure lh-title fw9">${state.output.text}</h1>
          <input
            class="f3 helvetica bg-light-pink bt-0 bl-0 br-0 bb b--white-40 black"
            placeholder="Ask me a question..."
            onkeyup=${onsubmit}
          />
        </div>
      </header>
    </body>
  `
}
