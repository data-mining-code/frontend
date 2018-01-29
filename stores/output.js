module.exports = function (state, emitter) {
  state.output = {
    text: 'Hello!'
  }

  emitter.on('output:submit', text => {
    state.output.text = text
    emitter.emit('render')
  })
}
