import Vue from 'vue'

export default {
  citiesReceived: (state, payload) => {
    state.cities = payload
  },

  inputSubmitted: (state, { userName, place, travellingDate }) => {
    state.firstname = userName
    state.city = place
    state.date = travellingDate
    state.logged = true
  },

  pictureReceived: (state, { url, alt }) => {
    // other syntax possible
    // equivalent: state.pictureUrl = url
    Vue.set(state, 'pictureUrl', url)
    Vue.set(state, 'pictureAlt', alt)
  }
}
