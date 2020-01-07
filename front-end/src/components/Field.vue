<template>
  <div v-if="fieldTypeValue === 'textField'" class="form-content">
    <input
      class="form-content-input"
      type="text"
      :name="nameIdFor"
      :id="nameIdFor"
      :title="title"
      required
    >
    <label
      class="form-content-label"
      :for="nameIdFor"
    >
      {{ label }}
    </label>
  </div>
  <div v-else class="form-content">
    <datepicker
      class="form-content-input"
      :name="nameIdFor"
      :id="nameIdFor"
      :title="title"
      required
    ></datepicker>
    <label
      class="form-content-label"
      :for="nameIdFor"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  props: {
    labelText: String,
    nameIdForText: String,
    titleText: String,
    fieldType: String
  },
  data () {
    return {
      label: this.labelText,
      nameIdFor: this.nameIdForText,
      title: this.titleText,
      fieldTypeValue: this.fieldType
    }
  }
}
</script>
