<template>
  <div>
    <div class="welcome">
      <div class="welcome-content">
        <div class="welcome-content-text">Plus que {{ days }} {{ dayValue }} avant vos vacances à {{ city }}, {{ firstname }} !</div>
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
  data () {
    return {
      dayValue: ''
    }
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
    ]),
    dayNumber () {
      switch (this.days) {
        case 0 || 1:
          this.dayValue = 'jour'
          break
        default:
          this.dayValue = 'jours'
      }
      return this.dayValue
    }
  },
  mounted () {
    this.catchPicture()
    this.dayNumber()
  }
}
</script>
