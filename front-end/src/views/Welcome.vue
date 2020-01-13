<template>
  <Picture :picture="beach" pictureAlt="Plage vue en plongée"/>
</template>

<script>
import Picture from '@/components/Picture'
import beach from '@/assets/images/plage.jpg'

export default {
  name: 'welcome',
  components: {
    Picture
  },
  data () {
    return {
      beach
    }
  }
}
</script>
