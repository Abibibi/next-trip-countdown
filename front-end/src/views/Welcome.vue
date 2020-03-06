<template>
  <div class="loader" v-if="!loaded">
    <div class="loader-content"></div>
  </div>
  <div v-else>
    <div class="welcome">
      <div class="welcome-content">
        <div class="welcome-content-text" v-if="dateInMilliseconds > now">Plus que {{ days }} {{ dayNumber }} avant vos vacances à {{ city }}, {{ firstname }} !</div>
        <div class="welcome-content-text" v-else >Ça y est, vous êtes en vacances, {{ firstname }} ! Bon voyage à {{ city }} !</div>
        <div class="welcome-content-other">
          <a class="welcome-content-other-link" href="#" @click="removeUser">Choisir une autre destination</a>
        </div>
      </div>
      <Countdown
        :countDays="days"
        :countHours="hours"
        :countMinutes="minutes"
        :countSeconds="seconds"
      />
      <!-- <div class="welcome-other">Choisir une autre destination</div> -->
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
      dayNumber: '',
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  computed: {
    ...mapState([
      'loaded',
      'pictureUrl',
      'pictureAlt',
      'firstname',
      'city',
      'date'
    ]),
    ...mapGetters([
      'dateAndTime'
    ]),
    dateInMilliseconds () {
      return Math.trunc(Date.parse(this.dateAndTime) / 1000)
    },
    seconds () {
      return (this.dateInMilliseconds - this.now) % 60
    },
    minutes () {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60
    },
    hours () {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24)
    }
  },
  methods: {
    ...mapActions([
      'catchPicture',
      'removeUser'
    ]),
    dayNumberValue () {
      switch (true) {
        case (this.days < 2):
          this.dayNumber = 'jour'
          break
        default:
          this.dayNumber = 'jours'
      }
      return this.dayNumber
    }
  },
  mounted () {
    document.title = `Séjour à ${this.city} - Mes prochaines vacances`
    this.catchPicture()
    this.dayNumberValue()
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },
  updated () {
    this.dayNumberValue()
  }
}
</script>
