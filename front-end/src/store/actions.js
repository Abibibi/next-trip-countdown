/* eslint-disable */

import axios from 'axios'
import router from '@/router'

export default {
  sendInputValue: ({ commit }, userInfo) => {
    axios.post(`${process.env.VUE_APP_API}/users/add`, userInfo, { withCredentials: true })
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
    axios.get(`${process.env.VUE_APP_API}/pictures/onePicture`, { withCredentials: true })
      .then((response) => {
        console.log(response)
        commit('pictureReceived', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  removeUser: ({ commit }) => {
    axios.get(`${process.env.VUE_APP_API}/users/remove`, { withCredentials: true })
      .then((response) => {
        console.log(response)
        commit('userDeleted')
        router.push({ name: 'home' })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
