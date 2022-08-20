<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button class="btn-2">
    {{ props.label }}
  </button>
</template>

<style scoped>
.btn-2 {
  background: #ddd;
}
</style>
