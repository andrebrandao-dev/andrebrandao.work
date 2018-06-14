<template>
  <div class="form-group">
    <label class="form-group-label">
      {{ label }}
      <input
        class="form-group-control"
        :placeholder="label"
        v-if="controlType === 'input'"
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
      <textarea
        class="form-group-control"
        :placeholder="label"
        v-if="controlType === 'textarea'"
        rows="10"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
      </textarea>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>
