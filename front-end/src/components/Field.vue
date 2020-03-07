<template>
  <div class="form-content">
    <input
      class="form-content-input"
      :type="type"
      :name="nameIdFor"
      :id="nameIdFor"
      :title="title"
      ref="input"
      @focus="textBlackLabelUp"
      v-model="inputVal"
      required
      :list="list"
    >
    <datalist v-if="list" id="allCities" >
      <option v-for="({ name: cityName, id: cityId }) in citiesToDisplay" :key="cityId">{{ cityName }}</option>
    </datalist>
    <label
      class="form-content-label"
      :for="nameIdFor"
      ref="label"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  props: {
    inputType: String,
    nameIdForText: String,
    value: String,
    listText: String,
    titleText: String,
    labelText: String,
    citiesCaught: Array
  },
  data () {
    return {
      type: this.inputType,
      nameIdFor: this.nameIdForText,
      list: this.listText,
      title: this.titleText,
      label: this.labelText
    }
  },
  methods: {
    ...mapActions([
      'changeInput'
    ]),
    textBlackLabelUp () {
      /* Input text is initially transparent (see rule for input in css)
      to hide date input text (jj/mm/aaa), which is displayed by default.
      With textInBlack function, input text turns black on focus
      and is thus visible to the user */
      this.$refs.input.classList.add('form-content-input-black')
      /* to make label go up */
      this.$refs.label.classList.add('form-content-label-animation')
    }
  },
  computed: {
    inputVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    citiesToDisplay () {
      return this.citiesCaught
    }
  }
}
</script>
