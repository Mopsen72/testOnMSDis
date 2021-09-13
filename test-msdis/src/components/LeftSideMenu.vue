<template>
  <div class="leftSideMenu">
    <div class="leftSideMenu__top">
      <site-logo class="leftSideMenu__logo"></site-logo>
      <div class="leftSideMenu__box">
        <left-menu-point
          class="leftSideMenu__menuPoint"
          v-bind:key="point.id"
          v-for="point of leftMenuPoints"
          v-bind:point="point"
        ></left-menu-point>
      </div>
    </div>
    <div class="leftSideMenu__bottom">
      <left-menu-point
        class="leftSideMenu__menuPoint"
        v-bind:point="settings"
      ></left-menu-point>
    </div>
  </div>
</template>

<script>
import LeftMenuPoint from "./LeftMenuPoint.vue";

import SiteLogo from "./SiteLogo.vue";
export default {
  name: "LeftSideMenu",
  components: {
    SiteLogo,
    LeftMenuPoint,
  },
  computed: {
    leftMenuPoints() {
      return this.$store.getters.getLeftMenuPoints;
    },
    settings() {
      return this.$store.getters.getSettings;
    },
  },
};
</script>

<style lang="scss">
.leftSideMenu {
  width: 240px;
  background-color: #f6f8f9;
  display: flex;
  flex-direction: column;
  &__top {
    flex-grow: 1;
  }
  &__bottom {
    margin-bottom: 16px;
  }
  &__logo {
    padding: 14px;
  }
  &__menuPoint {
    margin-left: 16px;
    margin-right: 16px;
    flex-grow: 1;
  }
}
</style>