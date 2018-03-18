const html = require('choo/html')
const Component = require('nanocomponent')
const fetch = window.fetch

class Input extends Component {
  constructor (state, emit) {
    super()
    this.emit = emit
    this.state = state
    this.handleSubmit = this.handleSubmit.bind(this)
    this.submitButton = this.submitButton.bind(this)
  }

  createElement () {
    return html`
    <div>
      <input
         id="user-input"
         class="f3 f2-l helvetica bt-0 bl-0 br-0 bb-0 pb2 w-100"
         style="border-radius: 10px; padding: 5px;"
         placeholder="ask me something"
         autofocus
         onkeyup=${this.handleSubmit}
      />
      <button onclick=${this.submitButton}>Send</button>
    </div>
    `
  }

  submitButton () {
    var input_text = document.getElementById("user-input").value
    if (input_text !== ""){
      this.emit('messages:add', {
        text: input_text,
        response: false
      })
      fetch(`http://${process.env.HOSTNAME}:3030/api/request?input=${input_text}&&id=${this.state.id}`)
          .then(res => res.json())
          .then(body => {
            this.state.id = body.id
            this.emit('messages:add', {
              text: body.text,
              response: true
            })
          })
      console.log(input_text)
    }
  }

  handleSubmit (evt) {
    if (evt.key === 'Enter') {
      this.emit('messages:add', {
        text: evt.target.value,
        response: false
      })
      fetch(`http://${process.env.HOSTNAME}:3030/api/request?input=${evt.target.value}&&id=${this.state.id}`)
        .then(res => res.json())
        .then(body => {
          this.state.id = body.id
          this.emit('messages:add', {
            text: body.text,
            response: true
          })
        })
    }
  }
}

module.exports = Input
