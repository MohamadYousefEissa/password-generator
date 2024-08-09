<template>
  <div>
    <label for="pass-length">Password Length :</label>
    <p>{{ range }}</p>
  </div>
  <input type="range" name="pass-length" id="pass-length" min="6" max="26" v-model="range" />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import store from '../../store/store.js'
const range = ref(12)
onMounted(() => {
  store.commit('setPasswordLength', range.value)
})
watch(range, (val) => {
  store.commit('setPasswordLength', parseInt(val))
})
</script>

<style scoped>
label {
  font-weight: normal;
  text-align: start;
  font-weight: bold;
  width: 100%;
  margin: 1rem 0 0.5rem 0;
}
input {
  width: 100%;
  outline: 0;
  accent-color: rgba(225, 225, 225, 0.3);
  opacity: 0.5;
  margin-bottom: 1rem;
}
html[data-theme='light'] input {
  accent-color: var(--main-clr);
  opacity: 1;
}
div {
  display: flex;
  width: 100%;
}
p {
  margin: 1rem 0 0.5rem 0;
}
</style>
