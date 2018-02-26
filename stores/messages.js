module.exports = function (state, emitter) {
  state.messages = []

  emitter.on('messages:add', message => {
    state.messages.push(message)
  })
}
