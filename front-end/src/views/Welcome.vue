<template>
  <div>
    <div class="welcome">
      <div class="welcome-text">Plus que nombre jours avant vos vacances à {{ city }}, {{ firstname }} !</div>
    </div>
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
      'pictureAlt',
      'firstname',
      'city'
    ])
  },
  methods: {
    ...mapActions([
      'catchPicture'
    ])
  },
  mounted () {
    this.catchPicture()
  }
}
</script>
