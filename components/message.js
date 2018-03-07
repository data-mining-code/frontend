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
    let classNames
    if (this.response) {
      classNames = 'mr-auto bg-silver'
    } else {
      classNames = 'ml-auto white bg-blue'
    }
    return html`
      <div class="w-20 mb3 ph3 pv4 tc br2 ${classNames}">
        ${this.text}
      </div>
    `
  }

  update (text) {
    return this.text !== text
  }
}

module.exports = Message
