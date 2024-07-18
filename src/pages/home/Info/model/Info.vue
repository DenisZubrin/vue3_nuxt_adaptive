<template>
  <section class="info">
    <div class="info__container container">
      <div class="info__card info__about-us">
        <h3 class="info__heading">Мы – студия 3D-визуализации 3D4U</h3>
        <p class="info__description">
          Наш основной принцип – индивидуальный подход к каждому клиенту.
          Огромный опыт работы позволяет нам воплощать проекты любой сложности –
          от небольших элементов интерьера до комплексного решения
          многофункциональных центров.
        </p>
        <Button class="info__button" :text="'Узнать больше'"
          ><svg
            class="button__icon"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1874 5.5V14.4375C17.1874 14.6198 17.115 14.7947 16.986 14.9236C16.8571 15.0526 16.6822 15.125 16.4999 15.125C16.3176 15.125 16.1427 15.0526 16.0138 14.9236C15.8848 14.7947 15.8124 14.6198 15.8124 14.4375V7.15945L5.9863 16.9864C5.8573 17.1154 5.68233 17.1879 5.49989 17.1879C5.31746 17.1879 5.14249 17.1154 5.01349 16.9864C4.88448 16.8574 4.81201 16.6824 4.81201 16.5C4.81201 16.3176 4.88448 16.1426 5.01349 16.0136L14.8404 6.1875H7.56239C7.38006 6.1875 7.20519 6.11507 7.07626 5.98614C6.94733 5.8572 6.87489 5.68234 6.87489 5.5C6.87489 5.31766 6.94733 5.1428 7.07626 5.01386C7.20519 4.88493 7.38006 4.8125 7.56239 4.8125H16.4999C16.6822 4.8125 16.8571 4.88493 16.986 5.01386C17.115 5.1428 17.1874 5.31766 17.1874 5.5Z"
            />
            </svg></Button>
      </div>
      <div class="info__card info__achievments">
        <p class="info__row">
          <span class="info__number">17</span
          ><span class="info__text">лет опыта работы</span>
        </p>
        <p class="info__row">
          <span class="info__number">7000+</span
          ><span class="info__text">проектов разной степени сложности</span>
        </p>
        <p class="info__row">
          <span class="info__number">80+</span
          ><span class="info__text">клиентов в сфере производства мебели</span>
        </p>
      </div>
      <div class="info__card info__achievments">
        <p class="info__row">
          <span class="info__number">80+</span
          ><span class="info__text">клиентов в сфере производства мебели</span>
        </p>
        <p class="info__row">
          <span class="info__number">170</span
          ><span class="info__text">средний опыт сотрудника</span>
        </p>
        <p class="info__row">
          <span class="info__number">7000+</span
          ><span class="info__text">Мы входим в группу компаний ИНКОМ</span>
        </p>
      </div>
      <div class="info__card info__picture">
        <img
          src="@/shared/assets/img/backgrounds/showcase_article_bg_3.png"
          alt="info bg"
          class="info__bg"
        />
      </div>
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
    gap: 24px;
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

  &__achievments {
    background-color: $gray80;
    padding: 44px 32px;
  }

  &__row {
    margin: 0;
  }

  &__text {
    @extend %p4;
    color: $white;
  }

  &__number {
    @extend %num;
    color: $white;
    display: block;
  }

  &__picture {
    position: relative;
  }

  &__bg {
    position: absolute;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
}

/*@media screen and (max-width: 1439px) {
  .info {
    &__container {
      justify-content: center;
    }

    &__picture {
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 1100px) {
  .info {
    &__card {
      max-width: 668px;
      align-items: center;
    }

    &__text {
      text-align: center;
      display: flex;
      align-items: center;
    }

    &__number {
      display: inline-block;
      margin: 0 20px 0 0;
    }
  }
}
*/
@media screen and (max-width: 360px) {
  .info {
    &__container {
      padding-top: 60px;
      padding-bottom: 56px;
    }

    &__card {
      justify-content: baseline;
      min-height: 0;
    }

    &__achievments {
      padding: 24px;
    }

    &__row {
      display: flex;
      justify-content: space-between;
    }

    &__number {
      font-size: 28px;
      display: block;
      width: 50%;
    }

    &__text {
      width: 50%;
    }
  }
}
</style>
