<template>
  <div id="app">
    <left-side-menu></left-side-menu>
    <overview></overview>
  </div>
</template>

<script>
import LeftSideMenu from "./components/LeftSideMenu.vue";
import Overview from "./components/Overview.vue";
export default {
  name: "App",
  components: { LeftSideMenu, Overview },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  display: flex;
  overflow: hidden;
}

@font-face {
  font-family: "Inter regular";
  src: url("./assets/font/inter/Inter-Regular.eot");
  src: url("./assets/font/inter/Inter-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/font/inter/Inter-Regular.woff2") format("woff2"),
    url("./assets/font/inter/Inter-Regular.woff") format("woff"),
    url("./assets/font/inter/Inter-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter semi";
  src: url("./assets/font/inter/Inter-SemiBold.eot");
  src: url("./assets/font/inter/Inter-SemiBold.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/font/inter/Inter-SemiBold.woff2") format("woff2"),
    url("./assets/font/inter/Inter-SemiBold.woff") format("woff"),
    url("./assets/font/inter/Inter-SemiBold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter bold";
  src: url("./assets/font/inter/Inter-Bold.eot");
  src: url("./assets/font/inter/Inter-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/font/inter/Inter-Bold.woff2") format("woff2"),
    url("./assets/font/inter/Inter-Bold.woff") format("woff"),
    url("./assets/font/inter/Inter-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
</style>
