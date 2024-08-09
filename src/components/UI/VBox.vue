<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="d-flex flex-column p-4 py-3 p-md-5 py-md-3 align-items-center" id="box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
#box {
  width: 450px;
  background: var(--box-bg);
  border-radius: 15px;
}

@media screen and (max-width: 480px) {
  #box {
    width: 95vw;
  }
}
</style>
