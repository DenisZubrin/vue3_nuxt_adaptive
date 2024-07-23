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
  min-height: 53px;
  box-sizing: border-box;
  background-color: var(--c-text);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 42px;
  color: var(--c-filler);
  position: relative;
  cursor: pointer;

  &__text {
    display: block;
    @extend %button_m;
  }

  &__icon {
    width: 22px;
    height: 22px;
    fill: var(--c-filler);
    position: absolute;
    top: calc(50% - 12px);
    right: 10px;

    &_light {
      fill: var(--c-text);
    }
  }

  &:hover,
  &:active {
    background-color: var(--c-secondary);
    color: var(--c-text);
    border-color: var(--c-secondary);
  }

  &:hover &__icon {
    fill: var(--c-text);
  }

  &_transparent {
    background-color: transparent;
    color: var(--c-text);
    border: 1px solid var(--c-text);
  }
}
</style>
