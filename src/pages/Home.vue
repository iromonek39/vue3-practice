<script setup>
import { prefectures } from '../assets/js/prefectures'

import SelectBox from '../components/SelectBox.vue'

import axios from 'axios'
import { onMounted, ref } from "vue"
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

const doClick = async () => {
  const getApi = await axios
    .get('https://weather.tsukumijima.net/api/forecast?city=400040')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const linkTo = (path) => {
  router.push(`/${path}`)
}

onMounted(() => {
  doClick()
  console.log(prefectures)
})
</script>

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

  <SelectBox
    :name="'prefectures'"
    :array="prefectures.prefs"/>
</template>
