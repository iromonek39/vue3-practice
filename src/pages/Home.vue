<template>
  <div>aaaaa</div>
  <div>{{ msg }}</div>
  <span @click="increment">+</span>
  <p>{{ count }}</p>
  <span @click="decrement">-</span>

  <div @click="linkTo('todo')">Todoへ遷移</div>

  <div>
    <button @click="setIsClick">おす</button>
    <p v-if="isClick">クリックした！</p>
    <p v-else>クリック解除した！</p>
  </div>

</template>

<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const count = ref(0)
const msg = 'Hello!'
const isClick = ref(false)

const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
const setIsClick = () => {
  isClick.value = !isClick.value
}


const linkTo = (path) => {
  router.push(`/${path}`)
}
</script>