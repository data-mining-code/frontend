const Component = require('nanocomponent')
const html = require('choo/html')
const fetch = window.fetch

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
      fetch(`http://${process.env.HOSTNAME}:3030/api/request?input=${evt.target.value}`)
        .then(res => res.json())
        .then(body => {
          this.emit('messages:add', {
            text: body.text,
            response: true
          })
        })
    }
  }
}

module.exports = Input
