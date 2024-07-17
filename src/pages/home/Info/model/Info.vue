<template>
  <section class="info">
    <div class="info__container container">
      <div class="info__card">
        <h3 class="info__heading">
          Мы – студия <br />3D-визуализации <br />3D4U
        </h3>
        <p class="info__description">
          Наш основной принцип – индивидуальный подход к каждому клиенту.
          Огромный опыт работы позволяет нам воплощать проекты любой сложности –
          от небольших элементов интерьера до комплексного решения
          многофункциональных центров.
        </p>

        <Button class="info__button" :text="'Узнать больше'"/>
      </div>
      <div class="info__card info__card_aligned">
        <span class="info__stat-row">
          <span class="info__number">17</span>лет опыта работы
        </span>
        <span class="info__stat-row">
          <span class="info__number">7000+</span>проектов разной степени
          сложности
        </span>
        <span class="info__stat-row">
          <span class="info__number">80+</span>клиентов в сфере производства
          мебели
        </span>
      </div>
      <div class="info__card info__card_aligned">
        <span class="info__stat-row">
          <span class="info__number">80+</span>клиентов в сфере производства
          мебели
        </span>
        <span class="info__stat-row">
          <span class="info__number">170</span>средний опыт сотрудника
        </span>
        <span class="info__stat-row">
          <span class="info__number">7000+</span>Мы входим в группу компаний
          ИНКОМ
        </span>
      </div>
      <div class="info__card info__card_picture"></div>
    </div>
  </section>
</template>
<script setup>
import Button from '@/shared/UI/Button';
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';

.info {
  background-color: $black;

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 100px;
    padding-bottom: 100px;
    gap: 24px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    background-color: inherit;
    min-height: 422px;
    max-width: 322px;
    width: 100%;

    &_aligned {
      padding: 44px 32px;
      background-color: $gray80;
    }

    &_picture {
      background-image: url('@/shared/assets/img/backgrounds/info_card_picture.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  &__heading {
    @extend %h3;
    color: $white;
    margin: 0;
  }

  &__description {
    @extend %p3;
    color: $white;
    margin: 0;
  }

  &__stat-row {
    @extend %p4;
    color: $white;
  }

  &__number {
    @extend %num;
    color: $white;
    display: block;
  }
}
</style>
