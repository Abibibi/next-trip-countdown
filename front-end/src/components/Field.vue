<template>
  <div class="form-content">
    <input
      class="form-content-input"
      :type="type"
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
</template>

<script>

export default {
  props: {
    inputType: String,
    nameIdForText: String,
    titleText: String,
    labelText: String
  },
  data () {
    return {
      type: this.inputType,
      nameIdFor: this.nameIdForText,
      title: this.titleText,
      label: this.labelText
    }
  }
}
</script>
