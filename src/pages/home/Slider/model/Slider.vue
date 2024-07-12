<template>
  <section class="slider">
    <div class="slider__text">
      <slot class="slider__heading" name="heading">Заголовок</slot>
      <slot class="slider__description" name="description">Описание</slot>
    </div>
    <div class="links">
      <ul class="links__list">
        <li v-for="(link, index) in links" :key="index" class="links__link">
          <a href="#">{{ link }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => ['Ссылка 1', 'Ссылка 2'],
    },
  },
};
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';

.slider {
  min-height: 800px;
  background-image: url('@/shared/assets/img/backgrounds/header-bg_1.png');
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: end;

  &__text {
    max-width: 200px;
    width: 100%;
    max-height: 200px;
    background-color: $white;
  }

  &__links {
    max-width: 400px;
    width: 100%;
    min-height: 400px;
    background-color: $white;
  }
}
</style>
