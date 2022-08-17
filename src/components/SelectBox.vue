<script setup>
import { ref } from "vue"

const selectVal = ref('北海道')

const props = defineProps({
  name: {
    type: String
  },
  id: {
    type: Number,
    default: null
  },
  array: {
    type: Array,
    default: () => {}
  }
})
</script>

<template>
  <select
    v-model="selectVal"
    :name="props.name"
    :id="props.id">
    <option
      v-for="(item, index) in props.array"
      :key="index"
      :value="item.name">
      {{ item.name }}
    </option>
  </select>
</template>

<style scoped>
select {
  border: 1px solid #000;
}
</style>