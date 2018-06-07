<template>
  <button
    class="btn"
    :class="`btn-${ theme }`"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: ''
    }
  }
}
</script>
