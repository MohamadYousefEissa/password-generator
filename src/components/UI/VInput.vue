<template>
  <div class="px-1 mt-4">
    <input type="text" name="password" id="password" aria-label="hidden" readonly ref="password" />
    <button title="copy" id="copy-btn" @click="copyPassword">
      <IconCopy />
    </button>
  </div>
</template>

<script>
import IconCopy from '../icons/IconCopy.vue'
import { hideAll } from 'tippy.js'
let to
export default {
  components: { IconCopy },
  methods: {
    copyPassword() {
      clearTimeout(to)
      const password = this.$refs.password.value
      if (password.length > 0) {
        navigator.clipboard.writeText(password)
      }
      to = setTimeout(() => {
        hideAll()
      }, 2000)
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--sec-clr);
  border-radius: 5px;
}
input {
  width: 95%;
  padding: 0.5rem;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--main-clr);
}

button {
  background: none;
  outline: 0;
  border: 0;
  color: var(--sec-clr);
}
</style>
