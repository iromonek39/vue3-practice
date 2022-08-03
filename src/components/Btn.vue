<template>
  <button class="mdc-button mdc-button--raised inline-demo-button mdc-ripple-upgraded">
    <span class="mdc-button__label"><!---->Button<!----></span>
    <div class="mdc-button__ripple"></div>
  </button>
</template>

<script setup>
</script>

<style scoped>
.mdc-button--raised.mdc-ripple-upgraded, .mdc-button--unelevated.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.24;
  cursor: pointer;
}
.mdc-button--raised:not(:disabled), .mdc-button--unelevated:not(:disabled) {
  color: #fff;
  background-color: #6200ee;
}
.mdc-button {
  height: 36px;
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  will-change: transform, opacity;
}
.mdc-button--raised {
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
}
.mdc-button--raised, .mdc-button--unelevated {
  padding: 0px 16px;
}
.mdc-button {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.0892857em;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0px 8px;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  user-select: none;
  appearance: none;
  overflow: visible;
  vertical-align: middle;
  border-radius: 4px;
}
.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple {
  top: 0px;
  left: 0px;
}
.mdc-button .mdc-button__ripple {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mdc-button .mdc-button__ripple {
  border-radius: 4px;
}
.mdc-button__ripple {
  box-sizing: content-box;
}
</style>
