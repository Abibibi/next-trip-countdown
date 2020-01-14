import Vue from 'vue'

export default {
  inputSubmitted: (state, { userName, place, travellingDate }) => {
    state.firstname = userName
    state.city = place
    state.date = travellingDate
    state.logged = true
  },

  pictureReceived: (state, { url, alt }) => {
    Vue.set(state, 'pictureUrl', url)
    Vue.set(state, 'pictureAlt', alt)
  }
}
