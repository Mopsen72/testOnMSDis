<template>
  <div class="logo">
    <img src="../assets/img/logo.png" alt="" class="logo__img" />
    <p class="logo__text">Web App</p>
  </div>
</template>

<script>
export default {
  name: "SiteLogo",
};
</script>

<style lang="scss">
.logo {
  width: 152px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__text {
    font-family: Inter bold;
    font-size: 18px;
    line-height: 24px;
    color: #252c32;
  }
}
</style>