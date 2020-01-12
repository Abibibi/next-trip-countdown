export default {
  newInputValue: (state, { name, value }) => {
    state[name] = value
  },

  inputSubmitted: (state) => {
    state['firstname'] = ''
    state['city'] = ''
    state['date'] = ''
  }
}
