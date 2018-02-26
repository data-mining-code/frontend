const Component = require('nanocomponent')
const html = require('choo/html')

class Message extends Component {
  constructor () {
    super()
    this.response = false
    this.text = ''
  }

  createElement (config) {
    this.text = config.text
    this.response = config.response
    return html`
      <div class="ml-auto">
        ${this.text}
      </div>
    `
  }

  update (text) {
    return this.text !== text
  }
}

module.exports = Message
