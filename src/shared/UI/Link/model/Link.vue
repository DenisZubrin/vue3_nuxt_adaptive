<template>
  <a :href="href" class="link">{{ text }}</a>
</template>
<script setup>
defineProps({
  text: {
    type: String,
  },
  href: {
    type: String,
    default: () => '#',
  },
});
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';
.link {
  position: relative;
  text-decoration: none;
  @extend %p4;
  color: $gray50;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    bottom: -2px;
    height: 1px;
    left: 0;
    background-color: $green;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: $green;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>
