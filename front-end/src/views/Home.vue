<template>
  <div class="home">
    <div class="home-text">
      <h1 class="home-text-title">Mes prochaines vacances</h1>
      <div class="home-text-form">
        <form class="home-text-form-content">
          <Field
            labelText="Prénom"
            nameIdForText="firstname"
            titleText="Saisissez votre prénom"
            fieldType="textField"
          />
          <Field
            labelText="Ville de séjour"
            nameIdForText="city"
            titleText="Saisissez la ville où vous vous rendez"
            fieldType="textField"
          />
          <Field
            labelText="Date du voyage"
            nameIdForText="date"
            titleText="Renseignez la date de votre voyage"
            fieldType="dateField"
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

export default {
  name: 'home',
  components: {
    Field
  },
  data () {
    return {
      beach
    }
  }
}
</script>
