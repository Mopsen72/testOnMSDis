<template>
  <div class="folder">
    <div class="folder__headerRow">
      <p class="folder__headerTitle folder__headerTitle_name">File name</p>
      <p class="folder__headerTitle folder__headerTitle_modT">Modified time</p>
      <p class="folder__headerTitle folder__headerTitle_type">File type</p>
    </div>
    <div class="folder__box">
      <div class="folder__row" v-bind:key="file.id" v-for="file of files">
        <p class="folder__name">{{ file.title }}</p>
        <p class="folder__modT">{{ file.modifTime }}</p>
        <p class="folder__type">{{ file.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Folder",
  computed: {
    files() {
      return this.$store.getters.getFile;
    },
  },
};
</script>

<style lang="scss">
.folder {
  display: flex;
  flex-direction: column;
  &__headerRow {
    display: flex;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #e5e9eb;
    }
  }
  &__headerTitle {
    font-family: Inter semi;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: 0.018em;
    text-transform: uppercase;
    color: #84919a;
    &_name {
      width: 50%;
    }
    &_modT {
      width: 25%;
    }
    &_type {
      width: 25%;
    }
  }
  &__row {
    display: flex;
    align-items: center;
    position: relative;
    height: 40px;
    border-radius: 6px;
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #e5e9eb;
    }
    &:hover {
      background: #d7edff;
    }
  }
  &__name {
    width: 50%;
    font-family: Inter regular;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.006em;
    color: #252c32;
  }
  &__modT {
    width: 25%;
    font-family: Inter regular;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.006em;
    color: #252c32;
  }
  &__type {
    width: 25%;
    font-family: Inter regular;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.006em;
    color: #252c32;
  }
}
</style>