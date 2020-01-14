<template>
  <div class="picture">
    <img class="picture-content" :alt="altObtained" :src="pictureObtained">
  </div>
</template>

<script>

export default {
  props: {
    picture: String,
    pictureAlt: String
  },
  // using computed property to get updated data from state
  computed: {
    pictureObtained () {
      return this.picture
    },
    altObtained () {
      return this.pictureAlt
    }
  }
}
</script>
