<template>
  <div @click="linkTo('/')">トップ</div>
  <div class="form-wrapper">
    <div class="inline-text-field-container">
      <div class="mdc-text-field mdc-text-field--outlined">
        <input
          v-model="todoText"
          class="mdc-text-field__input"
          autocorrect="off"
          autocomplete="off"
          spellcheck="false"
          id="demo-mdc-text-field"
          maxlength="524288">
        <div class="mdc-notched-outline mdc-notched-outline--upgraded">
          <div class="mdc-notched-outline__leading"></div>
          <div class="mdc-notched-outline__notch" style="">
            <label for="demo-mdc-text-field" class="mdc-floating-label" style=""></label>
          </div>
          <div class="mdc-notched-outline__trailing"></div>
        </div>
      </div>
    </div>
  </div>
  <Btn @click="updateTodo"/>

  <p>{{ updateText }}</p>
</template>

<script setup>
import Btn from '../components/Btn.vue'
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const linkTo = (path) => {
  router.push(`/${path}`)
}

const todoText = ref('')
const updateText = ref('')

const updateTodo = () => {
  updateText.value = todoText.value
  localStorage.setItem('todo', updateText.value)
}

onMounted(() => {
  updateText.value = localStorage.getItem('todo')
})
</script>

<style scoped>
.form-wrapper {
  display: flex;
  align-items: center;
}

.inline-text-field-container {
  display: flex;
  flex-direction: column;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) {
  background-color: transparent;
}
.mdc-text-field:not(.mdc-text-field--disabled) {
  background-color: #f5f5f5;
}
.mdc-text-field--outlined {
  border: none;
  overflow: visible;
}
.mdc-text-field {
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  will-change: transform,opacity;
  height: 56px;
  border-radius: 4px 4px 0 0;
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity,transform,color;
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
  border-bottom-color: rgba(0,0,0,.42);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: rgba(0,0,0,.87);
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  padding: 12px 16px 14px;
  border: none !important;
  background-color: transparent;
  z-index: 1;
}
.mdc-text-field .mdc-text-field__input {
  caret-color: #6200ee;
}
.mdc-text-field__input {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: .009375em;
  text-decoration: inherit;
  text-transform: inherit;
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 16px 6px;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
  background: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.mdc-notched-outline {
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  border-radius: 4px 0 0 4px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading, .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch, .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: rgba(0,0,0,.38);
}
.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  width: 12px;
}
.mdc-notched-outline__leading, .mdc-notched-outline__notch, .mdc-notched-outline__trailing {
  box-sizing: border-box;
  height: 100%;
  border-top: 1px solid;
  border-bottom: 1px solid;
  pointer-events: none;
}
.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
  max-width: calc(100% - 12px * 2);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: rgba(0,0,0,.6);
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: initial;
}
.mdc-text-field .mdc-floating-label {
  left: 16px;
  right: initial;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-floating-label {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  letter-spacing: .009375em;
  text-decoration: inherit;
  text-transform: inherit;
  position: absolute;
  left: 0;
  transform-origin: left top;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {
  border-radius: 0 4px 4px 0;
}
.mdc-notched-outline__trailing {
  border-left: none;
  border-right: 1px solid;
  flex-grow: 1;
}
.mdc-notched-outline__leading, .mdc-notched-outline__notch, .mdc-notched-outline__trailing {
  box-sizing: border-box;
  height: 100%;
  border-top: 1px solid;
  border-bottom: 1px solid;
  pointer-events: none;
}
.mdc-text-field+.mdc-text-field-helper-line {
  padding-right: 16px;
  padding-left: 16px;
}
.mdc-text-field-helper-line {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text {
  color: rgb(0,0,0);
}
.mdc-text-field-helper-text--persistent {
  transition: none;
  opacity: 1;
  will-change: initial;
}
.mdc-text-field-helper-text {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: .75rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: .0333333333em;
  text-decoration: inherit;
  text-transform: inherit;
  display: block;
  margin-top: 0;
  line-height: normal;
  margin: 0;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  will-change: opacity;
}
.mdc-text-field-helper-text::before {
  display: inline-block;
  width: 0;
  height: 16px;
  content: "";
  vertical-align: 0;
}

</style>
