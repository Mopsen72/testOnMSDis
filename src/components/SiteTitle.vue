<template>
  <div class="siteTitle">
    <h2 class="siteTitle__name">Overview</h2>
    <div class="siteTitle__btnBox">
      <button class="siteTitle__btn">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H18C18.2652 4 18.5196 4.10536 18.7071 4.29289C18.8946 4.48043 19 4.73478 19 5V8C18.9999 8.26519 18.8946 8.51951 18.707 8.707L14 13.414V17C13.9999 17.2652 13.8945 17.5195 13.707 17.707L11.707 19.707C11.5671 19.8468 11.389 19.942 11.195 19.9806C11.0011 20.0192 10.8 19.9993 10.6173 19.9237C10.4346 19.848 10.2785 19.7199 10.1686 19.5555C10.0587 19.391 10 19.1978 10 19V13.414L5.293 8.707C5.10545 8.51951 5.00006 8.26519 5 8V5Z"
            fill="#5B6871"
          /></svg
        >Filter
      </button>
      <button class="siteTitle__btn siteTitle__btn_colorBlue">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H13V16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H11V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
            fill="#5B6871"
          />
        </svg>
        Create Folder
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SiteTitle",
};
</script>

<style lang="scss">
.siteTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__name {
    font-family: Inter bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.022em;
    color: #252c32;
  }
  &__btnBox {
    display: flex;
    & :last-child {
      margin-right: 0;
    }
  }
  &__btn {
    margin-right: 8px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    font-family: Inter regular;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.006em;
    color: #252c32;
    border: 1px solid #dde2e4;
    box-sizing: border-box;
    border-radius: 6px;
    &_colorBlue {
      background: #4094f7;
      color: #fff;
      & svg path {
        fill: #fff;
      }
    }
  }
}
</style>