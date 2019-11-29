<template>
  <div class="home">
    <div class="home-text">
      <h1 class="home-text-title">Mes prochaines vacances</h1>
      <div class="home-text-form">
        <form class="home-text-form-content">
        </form>
      </div>
    </div>
    <div class="home-picture">
      <img class="home-picture-content" alt="Plage vue en plongée" :src="beach">
    </div>
  </div>
</template>

<script>

import beach from '@/assets/images/plage.jpg'

export default {
  name: 'home',
  data () {
    return {
      beach
    }
  }
}
</script>
