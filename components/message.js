const html = require('choo/html')
const Component = require('nanocomponent')

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
    let style
    let after_element_left
    let after_element_color
    let after_element_border
    if (this.response) {
      classNames = 'mr-auto bg-silver'
      style = 'background-color: rgba(75,250,75,.8);' 
      after_element_border = 'border-width:20px 20px 0 0;'
      after_element_color = 'border-color: rgba(75,250,75,.8) transparent;' 
      after_element_left = 'left: 4%;'
    } else {
      classNames = 'ml-auto bg-blue'
      style = 'background-color: rgba(250,75,40,.8);'
      after_element_border = 'border-width:20px 0 0 20px;'
      after_element_color = 'border-color: rgba(250,75,40,.8) transparent;' 
      after_element_left = 'left: 96%;'
    }
    return html`
      <div style="margin-bottom: 13px;">
        <div class="w-70 mb3 ph3 pv3 tc br2 ${classNames}" style="${style}  border-radius: 10px 10px 10px 10px;">
          ${this.text}
        </div>
        <div class="relative db w-0 b--solid" style="${after_element_border} ${after_element_color} ${after_element_left} margin: -1rem; width: 0;"></div>
      </div>
    `
  }

  update (text) {
    return this.text !== text
  }
}

module.exports = Message
