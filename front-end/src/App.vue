<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->
    <router-view/>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'isAuth'
    ])
  },
  mounted () {
    this.isAuth()
  }
}
</script>
