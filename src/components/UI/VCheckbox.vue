<template>
  <input type="checkbox" :name="Id" :id="Id" :checked="isChecked" @change="addChars" />
  <label :for="Id">{{ label }}</label>
</template>

<script>
export default {
  props: ['label', 'Id', 'isChecked'],

  methods: {
    addChars(ev) {
      this.$store.dispatch('addChars', { id: ev.target.id, isChecked: ev.target.checked })
    }
  }
}
</script>

<style scoped>
label {
  color: var(--sec-clr);
}

input {
  accent-color: var(--sec-clr);
  cursor: pointer;
  appearance: none;
}
input::before {
  border: 1px solid var(--sec-clr);
  content: '';
  width: 15px;
  height: 15px;
  display: block;
  background: transparent;
  border-radius: 3px;
  transition: all 0.3s;
  color: white;
  font-family: 'bootstrap-icons';
  font-size: 12px;
  font-weight: bold;
}
.red-border::before {
  border: 1px solid red;
}
input:checked::before {
  content: '\F272';
  background: var(--sec-clr);
  border: 1px solid transparent;
  display: flex;
  align-items: start;
  justify-content: center;
}
</style>
