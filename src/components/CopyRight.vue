<template>
  <teleport to="body">
    <p>
      Powered by Mohamad Yousef Eissa &copy; {{ new Date().getFullYear() }} | All rights reserved
    </p>
  </teleport>
</template>

<style scoped>
p {
  position: absolute;
  bottom: 5px;
  margin: 0;
  font-size: 14px;
  text-align: center;
}
</style>
