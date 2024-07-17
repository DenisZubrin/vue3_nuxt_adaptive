<template>
  <button class="button">
    <span class="button__text">{{ text }}</span>
    <svg
      class="button__icon"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1874 5.5V14.4375C17.1874 14.6198 17.115 14.7947 16.986 14.9236C16.8571 15.0526 16.6822 15.125 16.4999 15.125C16.3176 15.125 16.1427 15.0526 16.0138 14.9236C15.8848 14.7947 15.8124 14.6198 15.8124 14.4375V7.15945L5.9863 16.9864C5.8573 17.1154 5.68233 17.1879 5.49989 17.1879C5.31746 17.1879 5.14249 17.1154 5.01349 16.9864C4.88448 16.8574 4.81201 16.6824 4.81201 16.5C4.81201 16.3176 4.88448 16.1426 5.01349 16.0136L14.8404 6.1875H7.56239C7.38006 6.1875 7.20519 6.11507 7.07626 5.98614C6.94733 5.8572 6.87489 5.68234 6.87489 5.5C6.87489 5.31766 6.94733 5.1428 7.07626 5.01386C7.20519 4.88493 7.38006 4.8125 7.56239 4.8125H16.4999C16.6822 4.8125 16.8571 4.88493 16.986 5.01386C17.115 5.1428 17.1874 5.31766 17.1874 5.5Z"
      />
    </svg>
  </button>
</template>
<script setup>
defineProps({
  text: {
    type: String,
  },
});
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';

.button {
  border: none;
  border-radius: 8px;
  min-height: 60px;
  box-sizing: border-box;
  background-color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $gray80;
  position: relative;
  cursor: pointer;

  &__text {
    display: block;
    @extend %button_m;
  }

  &__icon {
    width: 22px;
    height: 22px;
    fill: $gray80;
    position: absolute;
    right: 10px;
  }

  &:hover,
  &:active {
    background-color: $green;
    color: $white;
  }
  &:hover &__icon {
    fill: $white;
  }
}
</style>
