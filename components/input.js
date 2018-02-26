const Component = require('nanocomponent')
const html = require('choo/html')

class Input extends Component {
  constructor (emit) {
    super()
    this.emit = emit

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  createElement () {
    return html`
      <input
         class="f3 f2-l helvetica bt-0 bl-0 br-0 bb b--navy navy pb2 w-100"
         placeholder="ask me something"
         autofocus
         onkeyup=${this.handleSubmit}
      />
    `
  }

  handleSubmit (evt) {
    if (evt.key === 'Enter') {
      this.emit('messages:add', {
        text: evt.target.value,
        response: false
      })
      this.emit('render')
    }
  }
}

module.exports = Input
