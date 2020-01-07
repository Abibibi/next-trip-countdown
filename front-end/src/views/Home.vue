<template>
  <div class="home">
    <div class="home-text">
      <h1 class="home-text-title">Mes prochaines vacances</h1>
      <div class="home-text-form">
        <form class="home-text-form-content">
          <div>
            <!-- <label class="home-text-form-content-label" for="firstname">Prénom</label> -->
            <input class="home-text-form-content-input"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Prénom"
              title="Saisissez votre prénom"
              required
            >
          </div>
          <div>
            <!-- <label class="home-text-form-content-label" for="city">La ville où je vais</label> -->
            <input
              class="home-text-form-content-input"
              type="text"
              name="city"
              id="city"
              placeholder="Ville de séjour"
              title="Saisissez la ville où vous rendez"
              required
            >
          </div>
          <div>
            <!-- <label class="home-text-form-content-label" for="date">Ma date de voyage</label> -->
            <input class="home-text-form-content-input home-text-form-content-input-date"
              ref="datepicker"
              @focus="datepickerDate"
              @blur="datepickerText"
              placeholder="Date du voyage"
              name="date"
              id="date"
              title="Renseignez la date de votre voyage"
              required
            >
          </div>
          <div>
            <button class="home-text-form-content-button">Ok</button>
          </div>
        </form>
      </div>
    </div>
    <div class="home-picture">
      <img class="home-picture-content" alt="Plage vue en plongée" :src="beach">
    </div>
  </div>
</template>

<script>

import beach from '@/assets/images/plage.jpg'

export default {
  name: 'home',
  data () {
    return {
      beach
    }
  },
  methods: {
    datepickerDate () {
      this.$refs.datepicker.type = 'date'
    },

    datepickerText () {
      this.$refs.datepicker.type = 'text'
    }
  }
}
</script>
