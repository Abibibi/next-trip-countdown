<template>
  <div class="countdown">
    <div class="countdown-block">
      <p class="countdown-block-digit">{{ days | two_digits }}</p>
      <p class="countdown-block-text">Jours</p>
    </div>
    <div class="countdown-block">
      <p class="countdown-block-digit">{{ hours | two_digits }}</p>
      <p class="countdown-block-text">Heures</p>
    </div>
    <div class="countdown-block">
      <p class="countdown-block-digit">{{ minutes | two_digits }}</p>
      <p class="countdown-block-text">Minutes</p>
    </div>
    <div class="countdown-block">
      <p class="countdown-block-digit">{{ seconds | two_digits }}</p>
      <p class="countdown-block-text">Secondes</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    journeyDate: String
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  computed: {
    date () {
      return this.journeyDate
    },
    dateInMilliseconds () {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds () {
      console.log((this.dateInMilliseconds - this.now) % 60)
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
  filters: {
    two_digits (value) {
      if (value < 0) {
        return '00'
      }
      if (value.toString().length <= 1) {
        return `0${value}`
      }
      return value
    }
  }
}
</script>
