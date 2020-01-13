<template>
  <Picture :picture="pictureUrl" :pictureAlt="pictureAlt"/>
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
  methods: {
    ...mapActions([
      'catchPicture'
    ])
  },
  mounted () {
    // using this.$nextTick to make sure all components were mounted
    this.$nextTick(function () {
      this.catchPicture()
    })
  }
}
</script>
