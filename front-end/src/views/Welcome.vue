<template>
  <div>
    <div class="welcome">
      <div class="welcome-content">
        <div class="welcome-content-text">Plus que {{ days }} jours avant vos vacances à {{ city }}, {{ firstname }} !</div>
      </div>
      <Countdown :journeyDate="date" />
    </div>
    <Picture :picture="pictureUrl" :pictureAlt="pictureAlt" />
  </div>
</template>

<script>
import Countdown from '@/components/Countdown'
import Picture from '@/components/Picture'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'welcome',
  components: {
    Countdown,
    Picture
  },
  computed: {
    ...mapState([
      'pictureUrl',
      'pictureAlt',
      'firstname',
      'city',
      'date'
    ]),
    ...mapGetters([
      'days',
      'dateAndTime'
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
