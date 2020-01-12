export default {
  newInputValue: (state, { name, value }) => {
    state[name] = value
  },

  inputSubmitted: (state, { userName, place, travellingDate }) => {
    state.firstname = userName
    state.city = place
    state.date = travellingDate
  }
}
