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
  background-color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 42px;
  color: var(--filler);
  position: relative;
  cursor: pointer;

  &__text {
    display: block;
    @extend %button_m;
  }

  &__icon {
    width: 22px;
    height: 22px;
    fill: var(--filler);
    position: absolute;
    right: 10px;
  }

  &:hover,
  &:active {
    background-color: var(--secondary);
    color: var(--text);
  }
  &:hover &__icon {
    fill: var(--text);
  }
}
</style>
