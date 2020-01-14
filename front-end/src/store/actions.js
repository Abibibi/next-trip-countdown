import axios from 'axios'
import router from '@/router'

export default {
  isAuth: ({ commit }) => {
    axios.get('http://localhost:5000/users/checkExistingUser', { withCredentials: true })
      .then((response) => {
        console.log(response)
        commit('userInfoReceived', response.data)
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  },

  catchCities: ({ commit }) => {
    axios.get('http://localhost:5000/places/', { withCredentials: true })
      .then((response) => {
        commit('citiesReceived', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  sendInputValue: ({ commit }, userInfo) => {
    axios.post('http://localhost:5000/users/add', userInfo, { withCredentials: true })
      .then((response) => {
        console.log(response)
        commit('inputSubmitted', userInfo)
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  },

  catchPicture: ({ commit }) => {
    axios.get('http://localhost:5000/pictures/onePicture', { withCredentials: true })
      .then((response) => {
        console.log(response)
        commit('pictureReceived', response.data[0])
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
