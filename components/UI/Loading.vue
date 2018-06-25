<template>
  <div class="loading">
    <PulseLoader :color="'#333132'" />
    <span class="loading-message">{{ message }}</span>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'Loading',
  components: {
    PulseLoader
  },
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>
