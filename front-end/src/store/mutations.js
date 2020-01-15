import Vue from 'vue'

export default {
  userInfoReceived: (state, { name, travellingDate, placeName }) => {
    state.firstname = name
    state.city = placeName
    state.date = travellingDate
    state.logged = true
  },

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
    Vue.set(state, 'loaded', true)
    Vue.set(state, 'pictureUrl', url)
    Vue.set(state, 'pictureAlt', alt)
  },

  userDeleted: (state) => {
    state.firstname = ''
    state.city = ''
    state.date = ''
    state.logged = false
    state.pictureUrl = ''
    state.pictureAlt = ''
  }
}
