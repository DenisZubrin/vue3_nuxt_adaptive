<template>
  <section class="contact-us">
    <img
      class="contact-us__background"
      src="@/shared/assets/img/backgrounds/contact_us_bg_wide.png"
      alt="bg"
    />
    <div class="contact-us__container container">
      <div class="contact-us__text">
        <h2 class="contact-us__heading">Свяжитесь с нами</h2>
        <p class="contact-us__description">
          Расскажите нам о своем проекте, мы рады сотрудничеству!
        </p>
      </div>
      <form action="#" class="form contact-us__form">
        <div class="form__text">
          <div class="form__field">
            <label for="name" class="form__label">Ваше имя*</label>
            <input type="text" class="form__input" name="name" id="name" />
          </div>
          <div class="form__field">
            <label for="phone" class="form__label">Телефон*</label>
            <input type="text" class="form__input" name="phone" id="phone" />
            <!-- placeholder="+7 (___) ___-__-__" -->
          </div>
          <div class="form__field">
            <label for="textarea" class="form__label"
              >Расскажите нам о своем проекте</label
            >
            <input
              type="text"
              class="form__input"
              name="textarea"
              id="textarea"
            />
          </div>
          <div class="form__agreement">
            <input
              type="checkbox"
              class="form__checkbox"
              name="checkbox"
              id="checkbox"
            />
            <label for="checkbox" class="form__agreement-label"
              >Я соглашаюсь с Политикой Конфиденциальности сайта</label
            >
          </div>
        </div>
        <button type="submit" class="button form__button" @submit.prevent>
          Отправить
        </button>
      </form>
      <a class="contact-us__link-to-top" href="#top">
        <svg
          class="contact-us__arrow-icon"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M6.47015 13.47L15.4702 4.47C15.6108 4.32955 15.8014 4.25066 16.0002 4.25066C16.1989 4.25066 16.3895 4.32955 16.5302 4.47L25.5302 13.47C25.6626 13.6122 25.7348 13.8002 25.7313 13.9945C25.7279 14.1888 25.6492 14.3742 25.5118 14.5116C25.3744 14.649 25.189 14.7277 24.9947 14.7312C24.8004 14.7346 24.6123 14.6625 24.4702 14.53L16.7502 6.81125L16.7502 27C16.7502 27.1989 16.6711 27.3897 16.5305 27.5303C16.3898 27.671 16.1991 27.75 16.0002 27.75C15.8012 27.75 15.6105 27.671 15.4698 27.5303C15.3292 27.3897 15.2502 27.1989 15.2502 27L15.2502 6.81125L7.53015 14.53C7.38798 14.6625 7.19993 14.7346 7.00563 14.7312C6.81133 14.7277 6.62594 14.649 6.48853 14.5116C6.35112 14.3742 6.2724 14.1888 6.26898 13.9945C6.26555 13.8002 6.33767 13.6122 6.47015 13.47Z"
            />
          </g>
        </svg>
      </a>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';

.contact-us {
  position: relative;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 0;
    filter: brightness(30%);
  }

  div &__container {
    padding: 85.5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  &__text {
    z-index: 1;
  }

  &__heading {
    margin: 0 0 24px;
    @extend %h1;
    color: $white;
  }

  &__description {
    margin: 0 0 48px;
    @extend %p4;
    color: $white;
  }

  &__link-to-top {
    position: absolute;
    bottom: 24px;
    right: 20px;
  }

  &__arrow-icon {
    width: 32px;
    height: 32px;
    fill: $gray5;

    &:hover {
      fill: $green;
    }
  }
}

.form {
  display: flex;
  align-items: start;
  justify-content: space-between;
  z-index: 1;

  &__text {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 24px;
  }

  &__field {
    position: relative;
    max-width: 322px;
    width: 100%;
  }

  &__label {
    @extend %p5;
    color: $gray30;
    position: absolute;
    top: 20px;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__input {
    width: 100%;
    background: inherit;
    outline: none;
    @extend %s4;
    color: $gray5;
    border: none;
    border-bottom: 1px solid $gray5;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 16px 0;
    box-sizing: border-box;

    &::placeholder {
      @extend %p5;
      color: $gray30;
    }
  }

  &__input:focus {
    border-bottom: 1px solid $green;
  }

  &__field:focus-within &__label {
    top: 0;
    color: $green;
  }

  &__agreement {
    width: 100%;

    &-label {
      @extend %p5;
      color: $gray30;
      margin: 0 0 0 24px;
      position: relative;

      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: -2px;
        left: -24px;
        width: 18px;
        height: 18px;
        border: 1px solid $white;
        border-radius: 2px;
        transition-duration: .3s;
        cursor: pointer;
      }
    }
  }

  &__checkbox {
    display: none;
  }

  &__checkbox:checked + &__agreement-label::before {
    background-image: url('@/shared/assets/img/icons/Check.svg');
    background-color: $green;
    border-color: $green;
  }

  &__button {
    border: none;
    cursor: pointer;
    padding: 20px 118px;
  }
}
</style>
