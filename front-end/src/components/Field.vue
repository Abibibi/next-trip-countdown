<template>
  <div class="form-content">
    <input
      class="form-content-input"
      :type="type"
      :name="nameIdFor"
      :id="nameIdFor"
      :title="title"
      :value="value"
      @change="handleChange"
      required
    >
    <label
      class="form-content-label"
      :for="nameIdFor"
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
    valueText: String,
    titleText: String,
    labelText: String
  },
  data () {
    return {
      type: this.inputType,
      nameIdFor: this.nameIdForText,
      value: this.valueText,
      title: this.titleText,
      label: this.labelText
    }
  },
  methods: {
    ...mapActions([
      'changeInput'
    ]),
    handleChange (event) {
      const { name, value } = event.target
      const payload = { name, value }
      this.changeInput(payload)
    }
  }
}
</script>
