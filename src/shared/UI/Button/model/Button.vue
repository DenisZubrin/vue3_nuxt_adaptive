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
    top: calc(50% - 12px);
    right: 10px;

    &_light {
      fill: var(--text);
    }
  }

  &:hover,
  &:active {
    background-color: var(--secondary);
    color: var(--text);
    border-color: var(--secondary);
  }

  &:hover &__icon {
    fill: var(--text);
  }

  &_transparent {
    background-color: transparent;
    color: var(--text);
    border: 1px solid var(--text);
  }
}
</style>
