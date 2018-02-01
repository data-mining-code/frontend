var fetch = window.fetch

module.exports = function (state, emitter) {
  state.input = {
    loading: false,
    text: ''
  }

  emitter.on('input:submit', input => {
    state.input.loading = true
    state.input.text = input

    fetch('http://localhost:3030/api/request')
      .then(res => res.json())
      .then(body => {
        emitter.emit('output:submit', body.text)
      })
  })
}
