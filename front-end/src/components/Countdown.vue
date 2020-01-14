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
    countDays: Number,
    countHours: Number,
    countMinutes: Number,
    countSeconds: Number
  },
  computed: {
    seconds () {
      return this.countSeconds
    },
    minutes () {
      return this.countMinutes
    },
    hours () {
      return this.countHours
    },
    days () {
      return this.countDays
    },
    dayNumberFigure () {
      return this.dayNumberFunction
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
