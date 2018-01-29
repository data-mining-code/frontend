module.exports = function (state, emitter) {
  state.input = {
    loading: false,
    text: ''
  }

  emitter.on('input:submit', input => {
    state.input.loading = true
    state.input.text = input
  })
}
