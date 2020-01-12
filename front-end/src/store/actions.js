import axios from 'axios'

export default {
  changeInput: ({ commit }, payload) => {
    commit('newInputValue', payload)
  },

  sendInputValue: ({ commit }, userInfo) => {
    axios.post('http://localhost:5000/users/add', userInfo)
      .then((response) => {
        console.log(response)
        commit('inputSubmitted', userInfo)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
