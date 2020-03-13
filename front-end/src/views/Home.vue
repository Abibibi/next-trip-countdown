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
    <Picture
      smallPicture="https://www.cjoint.com/doc/20_03/JCnw7uKOuzA_beach-832346-640.jpg"
      mediumPicture="https://www.cjoint.com/doc/20_03/JCnw70caVzA_beach-832346-1280.jpg"
      largePicture="https://www.cjoint.com/doc/20_03/JCnxam6xXPA_beach-832346-1920.jpg"
      pictureAlt="Plage vue en plongée" />
  </div>
</template>

<script>

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
