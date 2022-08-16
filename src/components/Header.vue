<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div class="header">
    header
  </div>
</template>

<style>
</style>


<!-- <template>
  <header class="header">
    <div
      v-show="this.$route.name !== 'Home'"
      class="header__prev-btn"
      @click="backToPage()">
      <img
        src="@/assets/img/icon/icon-prev.png"
        alt="prev">
      <span class="header__prev-btn-text">戻る</span>
    </div>
    <p class="header__title">
      {{ this.$route.meta.headerName }}
    </p>
    <p class="header__course">{{ course }}</p>
    <div
      v-if="this.$route.name === 'InputScoreDetail'"
      class="header__next-btn"
      @click="nextToHole()">
      <img
        src="@/assets/img/icon/icon-next.png"
        alt="prev">
      <span
        :class="nextHole === '進む' ? 'header__next-btn-nextHole': 'header__next-btn__back-InputScore'"
        class="header__next-btn-text">
        {{ nextHole }}</span>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  components: {
    mapGetters
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['currentCourse', 'pastScoreCurrentCourse', 'currentHole']),
    course () {
      let currentCourse = this.$store.state.currentCourse.course
      let pastCourse = this.pastScoreCurrentCourse.course
      console.log('pastcouse', pastCourse)
      let modCourse = ''

      if (this.$route.path === '/InputScoreDetail') {
        if (currentCourse.length > 20) {
          modCourse = currentCourse.substr(0, 20)
        } else {
          modCourse = currentCourse
        }
      } else if (this.$route.path === '/ScoreByShot') {
        if (pastCourse.length > 20) {
          modCourse = pastCourse.substr(0, 20)
          console.log('yeah', modCourse)
        } else {
          modCourse = pastCourse
          console.log('hoooooo', modCourse)
        }
      }
      return modCourse
    },
    nextHole () {
      if (this.currentCourse.holeType.count + this.currentCourse.holeType.start !== this.currentHole + 1) {
        return '進む'
      } else {
        return '一覧に戻る'
      }
    }
  },
  methods: {
    backToPage () {
      // TODO:後で変更↓
      if (this.$route.name === 'InputScore' || this.$route.name === 'PastScore') {
        this.$router.push('/')
      } else {
        window.history.back()
      }
    },
    nextToHole () {
      if (this.currentCourse.holeType.count + this.currentCourse.holeType.start !== this.currentHole + 1) {
        this.$store.commit('updateCurrentHole', this.currentHole + 1)
      } else {
        this.$router.push('/InputScore')
      }
    }
  },
  mounted () {
  },
  created () {
  },
  activated () {
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../assets/css/mixins.css';
  @import '../../assets/css/variables.css';
  .header {
    position: fixed;
    width: 100%;
    height: 56px;
    background: #000;
    font-weight: bold;
    text-align: center;
    color: #fff;
    z-index: 2;

    &__prev-btn {
      display: block;
      position: absolute;
      width: 62px;
      height: 100%;
      padding-top: 6px;

      & img {
      }

      &-text {
        position: absolute;
        width: 30px;
        bottom: 6px;
        left: 20px;
        font-size: 12px;
      }
    }

    &__next-btn {
      display: block;
      position: absolute;
      width: 62px;
      height: 100%;
      padding-top: 6px;
      right: 2px;
      top: 0;

      & img {
      }

      &-text {
        position: absolute;
        /* width: 30px; */
        bottom: 6px;
        font-size: 12px;
        /* left: 16px; */
      }

      &-nextHole {
        width: 30px;
        left: 16px;
      }

      &__back-InputScore {
        width: 60px;
        left: 0px;
      }
    }

    &__title {
      padding-top: 10px;
      font-size: 20px;
    }

    &__course {
      position: relative;
      bottom: 5px;
      font-size: 14px;
    }
  }
</style> -->
