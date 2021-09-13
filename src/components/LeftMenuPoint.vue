<template>
  <div class="menuPoint">
    <div
      class="menuPoint__titleBox"
      v-bind:class="{ menuPoint__titleBox_active: point.isActive }"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="menuPoint__img"
        v-html="point.svg"
      ></svg>
      <p class="menuPoint__title">{{ point.title }}</p>
    </div>
    <div class="menuPoint__subtitleBox">
      <p
        class="menuPoint__subtitle"
        v-bind:key="subtitle.id"
        v-for="subtitle of point.subtitle"
      >
        {{ subtitle.name }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftMenuPoint",
  props: ["point"],
};
</script>

<style lang="scss">
.menuPoint {
  &__titleBox {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 4px 8px;
    border-radius: 6px;
    &:hover {
      background: #d7edff;
    }
    &:hover > .menuPoint__title {
      color: #0e73f6;
    }
    &:hover > svg path {
      fill: #0e73f6;
    }
    &_active {
      background: #e2f2ff;
      & .menuPoint__title {
        font-family: Inter semi;
        color: #0e73f6;
      }
      & svg path {
        fill: #0e73f6;
      }
    }
  }
  &__img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  &__title {
    font-family: Inter regular;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.006em;
    color: #252c32;
  }
  &__subtitle {
    box-sizing: border-box;
    padding: 4px 8px 4px 40px;
    font-family: Inter regular;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.006em;
    color: #252c32;
    border-radius: 6px;
    &:hover {
      background: #d7edff;
      color: #0e73f6;
    }
  }
}
</style>