<script setup>
import { ref, watch } from "vue"

// const selectVal = ref('北海道')
// const selectCityVal = ref('011000')

const selectedVal = ref('')

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

// const emit = defineEmits(['selectedVal'])

// watch(selectVal, (newVal, oldVal) => {
//   emit('selectedVal', selectVal)
// })
</script>

<template>
  <!-- <template v-if="props.name === 'prefectures'">
    <select
      v-model="selectVal"
      :name="props.name">
      <option
        v-for="(item, index) in props.array"
        :key="index"
        :value="item.name">
        {{ item.name }}
      </option>
    </select>
  </template> -->

  <!-- <template v-else> -->
    <select
      v-model="selectedVal"
      :name="props.name">
      <option
        v-for="(item, index) in props.array"
        :key="index"
        :value="item.name">
        {{ item.name }}
      </option>
    </select>
  <!-- </template> -->
</template>

<style scoped>
select {
  border: 1px solid #000;
}
</style>