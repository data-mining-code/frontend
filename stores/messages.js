module.exports = function (state, emitter) {
  state.messages = [{text: 'How can I help you?',
                    response: true}]

  emitter.on('messages:add', message => {
    state.messages.push(message)
    emitter.emit('render')
  })
}
