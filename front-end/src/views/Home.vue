<template>
  <div class="home">
    <div class="home-text">
      <h1 class="home-text-title">Mes prochaines vacances</h1>
      <div class="home-text-form">
        <form class="home-text-form-content">
          <Field
            inputType="text"
            nameIdForText="firstname"
            :valueText="firstname"
            titleText="Saisissez votre prénom"
            labelText="Prénom"
          />
          <Field
            inputType="text"
            nameIdForText="city"
            :valueText="city"
            titleText="Saisissez la ville où vous vous rendez"
            labelText="Ville de séjour"
          />
          <Field
            inputType="date"
            nameIdForText="date"
            :valueText="date"
            titleText="Renseignez la date de votre voyage"
            labelText="Date du voyage"
          />
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
import Field from '@/components/Field.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    Field
  },
  data () {
    return {
      beach
    }
  },
  computed: {
    ...mapState([
      'firstname',
      'city',
      'date'
    ])
  }
}
</script>
