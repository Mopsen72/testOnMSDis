<template>
  <div class="siteSearch">
    <img src="../assets/img/Search.svg" alt="" class="siteSearch__searchImg" />
    <input type="text" class="siteSearch__input" placeholder="Search" />
    <img src="../assets/img/Help.svg" alt="" class="siteSearch__button" />
    <img src="../assets/img/Profile.svg" alt="" class="siteSearch__button" />
  </div>
</template>

<script>
export default {
  name: "SiteSearch",
};
</script>

<style lang="scss">
.siteSearch {
  height: 56px;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 16px 40px;

  &::after {
    content: "";
    position: absolute;
    height: 1px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #e5e9eb;
  }
  &__searchImg {
    width: 24px;
    height: 24px;
  }
  &__input {
    margin-left: 8px;
    border: none;
    font-family: Inter regular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    flex-grow: 1;
    flex-shrink: 1;
    &:focus {
      outline: none;
    }
  }
  &__button {
    width: 32px;
    height: 32px;
  }
}
</style>