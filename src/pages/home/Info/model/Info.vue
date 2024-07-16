<template >
    <section class="info">
      <div class="container info__container">
        <div class="info__card">
          <h3 class="info__heading">Мы – студия <br />3D-визуализации <br />3D4U</h3>
          <p class="info__description">Наш основной принцип – индивидуальный подход к каждому клиенту. Огромный опыт работы позволяет нам воплощать проекты любой сложности – от небольших элементов интерьера до комплексного решения многофункциональных центров.</p>
          <!-- button вынести в shared -->
          <a href="#" class="button info__button">
            <span class="button__text">Узнать больше</span>
            <svg class="button__icon" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.1874 5.5V14.4375C17.1874 14.6198 17.115 14.7947 16.986 14.9236C16.8571 15.0526 16.6822 15.125 16.4999 15.125C16.3176 15.125 16.1427 15.0526 16.0138 14.9236C15.8848 14.7947 15.8124 14.6198 15.8124 14.4375V7.15945L5.9863 16.9864C5.8573 17.1154 5.68233 17.1879 5.49989 17.1879C5.31746 17.1879 5.14249 17.1154 5.01349 16.9864C4.88448 16.8574 4.81201 16.6824 4.81201 16.5C4.81201 16.3176 4.88448 16.1426 5.01349 16.0136L14.8404 6.1875H7.56239C7.38006 6.1875 7.20519 6.11507 7.07626 5.98614C6.94733 5.8572 6.87489 5.68234 6.87489 5.5C6.87489 5.31766 6.94733 5.1428 7.07626 5.01386C7.20519 4.88493 7.38006 4.8125 7.56239 4.8125H16.4999C16.6822 4.8125 16.8571 4.88493 16.986 5.01386C17.115 5.1428 17.1874 5.31766 17.1874 5.5Z" />
            </svg>
          </a>
          <!--  -->
        </div>
        <div class="info__card info__card_aligned">
          <span class="info__stat-row">
            <span class="info__number ">17</span>лет опыта работы
          </span>
          <span class="info__stat-row">
            <span class="info__number">7000+</span>проектов разной степени сложности
          </span>
          <span class="info__stat-row">
            <span class="info__number">80+</span>клиентов в сфере производства мебели
          </span>
        </div>
        <div class="info__card info__card_aligned">
          <span class="info__stat-row">
            <span class="info__number">80+</span>клиентов в сфере производства мебели
          </span>
          <span class="info__stat-row">
            <span class="info__number">170</span>средний опыт сотрудника
          </span>
          <span class="info__stat-row">
            <span class="info__number">7000+</span>Мы входим в группу компаний ИНКОМ
          </span>
        </div>
        <div class="info__card info__card_picture"></div>
      </div>
    </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';
.button {
  //вынести отдельно в shared
  text-decoration: none;
  border-radius: 8px;
  min-height: 60px;
  box-sizing: border-box;
  background-color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $gray80;
  position: relative;

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

  &:hover, &:active {
    background-color: $green;
    color: $white;
  }
  &:hover &__icon {
    fill: $white;
  }
}

.info {
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 100px 20px;
    gap: 24px 0px;
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