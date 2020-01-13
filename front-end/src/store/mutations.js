export default {
  inputSubmitted: (state, { userName, place, travellingDate }) => {
    state.firstname = userName
    state.city = place
    state.date = travellingDate
    state.logged = true
  }
}
