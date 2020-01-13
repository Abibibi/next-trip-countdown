<template>
  <div class="picture">
    <img class="picture-content" :alt="alt" :src="photo">
  </div>
</template>

<script>

export default {
  props: {
    picture: String,
    pictureAlt: String
  },
  data () {
    return {
      photo: this.picture,
      alt: this.pictureAlt
    }
  }
}
</script>
