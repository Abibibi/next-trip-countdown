<template>
  <div class="picture">
    <img
      class="picture-content"
      :alt="pictureAlternative"
      :src="pictureMedium"
      :srcset="`${pictureSmall} 640w, ${pictureMedium} 1280w, ${pictureLarge} 1920w`"
    >
  </div>
</template>

<script>

export default {
  props: {
    smallPicture: String,
    mediumPicture: String,
    largePicture: String,
    pictureAlt: String
  },
  // using computed property to get updated data from state
  computed: {
    pictureSmall () {
      return this.smallPicture
    },
    pictureMedium () {
      return this.mediumPicture
    },
    pictureLarge () {
      return this.largePicture
    },
    pictureAlternative () {
      return this.pictureAlt
    }
  }
}
</script>
