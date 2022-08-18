<script setup>
import { prefectures } from '../assets/js/prefectures'

import SelectBox from '../components/SelectBox.vue'
import Btn from '../components/Btn.vue'

import axios from 'axios'
import { onMounted, computed, ref } from "vue"
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const count = ref(0)
const msg = 'Hello!'
const isClick = ref(false)
const selectedVal = ref('北海道')
const selectedCityVal = ref('011000')

const temperature = reactive()

const setCities = computed(() => {
  return prefectures.prefs.filter(item => {
    return item.name === selectedVal.value
  })
})

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
    .get('https://weather.tsukumijima.net/api/forecast?city=' + selectedCityVal.value)
    .then(res => {
      console.log(res.data)
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
    v-model="selectedVal"
    :name="'prefectures'"
    :array="prefectures.prefs"/>

  <SelectBox
    v-model="selectedCityVal"
    :name="'cities'"
    :array="setCities[0].citys"/>
  
  <Btn @click.native="doClick"/>
</template>
