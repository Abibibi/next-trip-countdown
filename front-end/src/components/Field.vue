<template>
  <div>
    <input
      class="form-content-input"
      type="text"
      name="firstname"
      id="firstname"
      title="Saisissez votre prénom"
      required
    >
    <label for="firstname">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    labelText: String
  },
  data () {
    return {
      label: this.labelText
    }
  }
}
</script>
