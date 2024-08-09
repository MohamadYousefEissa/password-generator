<template>
  <p>Password Settings :</p>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm d-flex flex-column p-0">
        <div class="ch-box">
          <v-checkbox :label="'Lowercase (a-z)'" :Id="'lower-case'" :isChecked="true"></v-checkbox>
        </div>
        <div class="ch-box">
          <v-checkbox :label="'Numbers(0-9)'" :Id="'numbers'"></v-checkbox>
        </div>
        <div class="ch-box">
          <v-checkbox :label="'Exclude Duplicate'" :Id="'exclude-duplicate'"></v-checkbox>
        </div>
      </div>
      <div class="col d-flex flex-column p-0 ms-0 ms-md-5">
        <div class="ch-box">
          <v-checkbox :label="'Uppercase (A-Z)'" :Id="'upper-case'"></v-checkbox>
        </div>
        <div class="ch-box">
          <v-checkbox :label="'Symbols (&%$#)'" :Id="'symbols'"></v-checkbox>
        </div>
        <div class="ch-box">
          <v-checkbox :label="'Include Space'" :Id="'include-space'"></v-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VCheckbox from './UI/VCheckbox.vue'
export default {
  components: { VCheckbox }
}
</script>

<style scoped>
p {
  text-align: start;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.ch-box {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>
