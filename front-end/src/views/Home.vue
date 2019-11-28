<template>
  <div class="home">
    <img alt="Lunettes de soleil posées sur le sable" :src="glasses">
  </div>
</template>

<script>

import glasses from '@/assets/images/glasses.jpg'

export default {
  name: 'home',
  data () {
    return {
      glasses
    }
  }
}
</script>
