<template>
  <div class="home">
    <div class="home-text">
      <h1 class="home-text-title">Mes prochaines vacances</h1>
      <div class="home-text-form">
        <form @submit.prevent="handleSubmit" class="home-text-form-content">
          <Field
            inputType="text"
            nameIdForText="firstname"
            v-model="user.firstname"
            titleText="Saisissez votre prénom"
            labelText="Prénom"
          />
          <Field
            inputType="text"
            nameIdForText="city"
            v-model="user.city"
            titleText="Saisissez la ville où vous vous rendez"
            labelText="Ville de séjour"
            listText="allCities"
            :citiesCaught="cities"
          />
          <Field
            inputType="date"
            nameIdForText="date"
            v-model="user.date"
            titleText="Renseignez la date de votre voyage"
            labelText="Date du voyage"
          />
          <div>
            <button class="home-text-form-content-button">Ok</button>
          </div>
        </form>
      </div>
    </div>
    <Picture :picture="beach" pictureAlt="Plage vue en plongée" />
  </div>
</template>

<script>

import beach from '@/assets/images/plage.jpg'
import Field from '@/components/Field.vue'
import Picture from '@/components/Picture.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    Field,
    Picture
  },
  data () {
    return {
      beach,
      user: {
        firstname: '',
        city: '',
        date: ''
      }
    }
  },
  computed: {
    ...mapState([
      'cities'
    ])
  },
  methods: {
    ...mapActions([
      'isAuth',
      'sendInputValue'
    ]),
    handleSubmit () {
      const { firstname, city, date } = this.user

      const userInfo = {
        userName: firstname,
        place: city,
        travellingDate: date
      }

      this.sendInputValue(userInfo)

      this.user = {
        firstname: '',
        city: '',
        date: ''
      }
    }
  },
  mounted () {
    document.title = 'Choisir une destination - Mes prochaines vacances'
  }
}
</script>
