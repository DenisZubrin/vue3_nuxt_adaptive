<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__burger burger">бургер</div>
      <!-- ссылка -->
      <figure class="logo header__logo">
        <a href="/" class="logo__wrapper-link">
          <img
            class="logo__icon"
            src="@/shared/assets/img/icons/logo.svg"
            alt="3D4U logotype"
          />
          <span class="logo__caption"
            >Cтудия <br />3D-визуализации <br />3D FOR YOU</span
          >
        </a>
      </figure>
      <nav class="nav header__nav">
        <ul class="nav__list">
          <li class="nav__item">
            <div class="select">
              <a href="#" class="select__link nav__link"
                >Визуализация мебели</a
              >
              <svg
                class="select__icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.64622 9.64625L7.64622 4.64625C7.69265 4.59976 7.7478 4.56288 7.8085 4.53772C7.8692 4.51255 7.93426 4.4996 7.99997 4.4996C8.06567 4.4996 8.13074 4.51255 8.19144 4.53772C8.25214 4.56288 8.30728 4.59976 8.35372 4.64625L13.3537 9.64625C13.4475 9.74007 13.5002 9.86731 13.5002 10C13.5002 10.1327 13.4475 10.2599 13.3537 10.3537C13.2599 10.4476 13.1326 10.5003 13 10.5003C12.8673 10.5003 12.74 10.4476 12.6462 10.3537L7.99997 5.70687L3.35372 10.3537C3.30726 10.4002 3.25211 10.4371 3.19141 10.4622C3.13072 10.4873 3.06566 10.5003 2.99997 10.5003C2.93427 10.5003 2.86921 10.4873 2.80852 10.4622C2.74782 10.4371 2.69267 10.4002 2.64622 10.3537C2.59976 10.3073 2.56291 10.2521 2.53777 10.1914C2.51263 10.1307 2.49969 10.0657 2.49969 10C2.49969 9.9343 2.51263 9.86924 2.53777 9.80855C2.56291 9.74785 2.59976 9.6927 2.64622 9.64625Z"
                />
              </svg>
              <ul class="select__list">
                <li class="select__item">
                  <a href="#" class="select__link"
                    >Подбор комплектующих мебели</a
                  >
                </li>
                <li class="select__item">
                  <a href="#" class="select__link"
                    >Подбор комплектующих мебели</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#">Верстка каталогов</a>
          </li>
          <li class="nav__item">
            <div class="select">
              <a href="#" class="select__link nav__link">Дизайн проектов</a>
              <svg
                class="select__icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.64622 9.64625L7.64622 4.64625C7.69265 4.59976 7.7478 4.56288 7.8085 4.53772C7.8692 4.51255 7.93426 4.4996 7.99997 4.4996C8.06567 4.4996 8.13074 4.51255 8.19144 4.53772C8.25214 4.56288 8.30728 4.59976 8.35372 4.64625L13.3537 9.64625C13.4475 9.74007 13.5002 9.86731 13.5002 10C13.5002 10.1327 13.4475 10.2599 13.3537 10.3537C13.2599 10.4476 13.1326 10.5003 13 10.5003C12.8673 10.5003 12.74 10.4476 12.6462 10.3537L7.99997 5.70687L3.35372 10.3537C3.30726 10.4002 3.25211 10.4371 3.19141 10.4622C3.13072 10.4873 3.06566 10.5003 2.99997 10.5003C2.93427 10.5003 2.86921 10.4873 2.80852 10.4622C2.74782 10.4371 2.69267 10.4002 2.64622 10.3537C2.59976 10.3073 2.56291 10.2521 2.53777 10.1914C2.51263 10.1307 2.49969 10.0657 2.49969 10C2.49969 9.9343 2.51263 9.86924 2.53777 9.80855C2.56291 9.74785 2.59976 9.6927 2.64622 9.64625Z"
                />
              </svg>
              <ul class="select__list">
                <li class="select__item">
                  <a href="#" class="select__link">Проекты под заказ</a>
                </li>
                <li class="select__item">
                  <a href="#" class="select__link">Готовые проекты</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#">3D-тур</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#">Онлайн-конструктор</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#">О нас</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';

.header {
  position: absolute;
  width: 100%;
  z-index: 2;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
  &__burger {
    display: none;
  }
}

.logo {
  margin: 0;
  cursor: pointer;

  &__wrapper-link {
    display: flex;
    text-decoration: none;
    align-items: center;
  }

  &__icon {
    height: 46px;
    margin: 0 10px 0 0;
  }

  &__caption {
    @extend %p5;
    color: $white;
  }
}
// Стилизация select
.select {
  position: relative;
  display: flex;
  align-items: center;

  &__link:hover ~ &__icon {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(0deg);
    fill: $green;
  }

  &__icon {
    margin: 0 0 0 4px;
    fill: $white;
    width: 16px;
    height: 16px;
    transform: scale(1, -1);
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover > &__list {
    opacity: 1;
    visibility: visible;
  }

  &__list {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 28px;
    left: -12px;
    list-style-type: none;
    border-radius: 8px;
    background-color: $gray80;
    min-width: 252px;
    padding: 0;
  }

  &__item {
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
      background-color: $green;
    }

    &:first-child {
      border-radius: 8px 8px 0 0;
    }
    &:last-child {
      border-radius: 0 0 8px 8px;
    }
  }
  &__item > &__link {
    color: $white;
    text-decoration: none;
  }
}

.nav {
  display: flex;
  align-items: center;
  min-height: 78px;

  &__list {
    @extend %p4;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  &__item {
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;

    &:hover {
      color: $green;
      transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__item:not(:last-child) {
    margin: 0 20px 0 0;
  }

  &__link {
    color: $white;
    text-decoration: none;
    border-bottom: 1px solid rgba($green, 0);

    &:hover {
      border-bottom: 1px solid rgba($green, 1);
      transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      color: $green;
    }
  }
}
</style>
