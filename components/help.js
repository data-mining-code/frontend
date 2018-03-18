const html = require('choo/html')
const Component = require('nanocomponent')
const fetch = window.fetch

class Help extends Component {
  constructor (state, emit) {
    super()
    this.emit = emit
    this.state = state
  }

  createElement () {
    return html`
      <div style="z-index:100;height:50vh;width:50vw;background-color:#FFFFFF">
        <h1>Help</h1>
      </div>
    `
  }
}

module.exports = Help
