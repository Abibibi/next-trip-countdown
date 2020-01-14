<template>
  <div>
    <Picture :picture="pictureUrl" :pictureAlt="pictureAlt" />
  </div>
</template>

<script>
import Picture from '@/components/Picture'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'welcome',
  components: {
    Picture
  },
  computed: {
    ...mapState([
      'pictureUrl',
      'pictureAlt'
    ])
  },
  //
  methods: {
    ...mapActions([
      'catchPicture'
    ])
  },
  mounted () {
    this.catchPicture()/* .then(this.$nextTick).then(() => {
      console.log(this.pictureUrl) // => 'updated')
    }) */
  }
}
</script>
