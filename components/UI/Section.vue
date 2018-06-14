<template>
  <!-- Courses Section -->
  <section class="section" :class="`bg-${ color }`">
    <header class="section-header wow" :class="sectionHeader.animation">
      <i class="icon-circled icon-circled-primary ion" :class="sectionHeader.icon"></i>
      <h1 class="section-header-title">{{ sectionHeader.title }}</h1>
      <span class="section-header-subtitle">{{ sectionHeader.subtitle }}</span>
    </header>
    <slot name="body" />
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    color: {
      type: String,
      required: true
    },
    sectionHeader: {
      type: Object,
      required: true
    }
  }
}
</script>
