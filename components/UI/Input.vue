<template>
  <div class="form-group">
    <label :title="label">
      <input
        class="form-group-control"
        :placeholder="label"
        v-if="controlType === 'input'"
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
      <textarea
        class="form-group-control textarea"
        :placeholder="label"
        v-if="controlType === 'textarea'"
        rows="10"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
      </textarea>
      <i class="form-group-icon ion" :class="icon"></i>
      <span class="sr-only">{{ label }}</span>
      <span class="form-group-border"></span>
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
    icon: {
      type: String,
      required: true
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
