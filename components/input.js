const Component = require('nanocomponent')
const html = require('choo/html')

class Input extends Component {
  constructor () {
    super()
    this.input = ''
  }

  createElement (input) {
    this.input = input.text
    return html`
      <input
         class="f3 f2-l helvetica bt-0 bl-0 br-0 bb b--navy navy pb2 vw-100"
         placeholder="ask me something"
         autofocus
         onkeyup=${this.handleSubmit}
      />
    `
  }

  update (input) {
    return this.input !== input.text
  }
}

module.exports = Input
