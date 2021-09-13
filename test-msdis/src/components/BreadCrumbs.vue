<template>
  <ul class="breadCrumbs">
    <li class="breadCrumbs__point">Overview</li>
    <li class="breadCrumbs__point">subs1</li>
  </ul>
</template>

<script>
export default {
  name: "BreadCrumbs",
};
</script>

<style lang="scss">
.breadCrumbs {
  display: flex;
  list-style-type: none;
  align-items: center;
  height: 36px;
  & :first-child::before {
    content: none;
    margin-right: 0;
  }
  &__point {
    font-family: Inter regular;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #252c32;
    margin-right: 10px;
    &::before {
      content: "-";
      margin-right: 10px;
    }
  }
}
</style>