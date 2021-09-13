<template>
  <div class="overview">
    <site-search></site-search>
    <div class="overview__box">
      <site-title></site-title>
      <tab></tab>
      <bread-crumbs></bread-crumbs>
      <folder></folder>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "./BreadCrumbs.vue";
import Folder from "./Folder.vue";
import SiteSearch from "./SiteSearch.vue";
import SiteTitle from "./SiteTitle.vue";
import Tab from "./Tab.vue";

export default {
  name: "Overview",
  components: { SiteSearch, SiteTitle, Tab, BreadCrumbs, Folder },
};
</script>

<style lang="scss">
.overview {
  flex-grow: 1;
  &__box {
    box-sizing: border-box;
    padding: 32px 40px;
  }
}
</style>