<template>
  <transition name="fade">
    <p v-if="showAlert" class="alert alert-danger m-0 py-2 w-100"><slot></slot></p>
  </transition>
</template>

<script>
export default {
  props: ['showAlert']
}
</script>

<style scoped>
.fade-enter-active {
  animation: fade 1s;
}
.fade-leave-active {
  animation: fade 0.5s reverse;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
