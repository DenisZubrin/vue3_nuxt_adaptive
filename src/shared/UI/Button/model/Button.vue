<template>
  <button class="button">
    <span class="button__text">{{ text }}</span>
    <slot name="icon"></slot>
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
  background-color: $gray5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 42px;
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
