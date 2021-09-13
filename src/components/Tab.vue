<template>
  <ul class="tab">
    <li class="tab__point tab__point_active">sub1</li>
    <li class="tab__point">sub2</li>
    <li class="tab__point">sub3</li>
  </ul>
</template>

<script>
export default {
  name: "Tab",
};
</script>

<style lang="scss">
.tab {
  display: flex;
  position: relative;
  list-style-type: none;
  & :last-child {
    margin-right: 0;
  }
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #e5e9eb;
    z-index: 0;
  }
  &__point {
    font-family: Inter regular;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.006em;
    color: #252c32;
    margin-right: 24px;
    &_active {
      font-family: Inter semi;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        height: 1px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #252c32;
        z-index: 1;
      }
    }
  }
}
</style>