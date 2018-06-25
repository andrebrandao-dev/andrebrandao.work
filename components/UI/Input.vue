<template>
  <div class="form-group" :class="hasError ? 'has-error' : ''">
    <label :title="label">
      <input
        class="form-group-control"
        :placeholder="label"
        v-if="controlType !== 'textarea'"
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event)"
        @blur="$emit('blur', $event)"
      >
      <textarea
        class="form-group-control textarea"
        :placeholder="label"
        v-if="controlType === 'textarea'"
        rows="10"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur', $event)"
      >
      </textarea>
      <i class="form-group-icon ion" :class="icon"></i>
      <i class="form-group-helper add-tag ion ion-md-add" v-if="helper" @click="$emit('saveHelper')"></i>
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
    hasError: {
      type: Boolean,
      default: false
    },
    helper: {
      type: Boolean,
      default: false
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
