<template>
  <header class="header">
    <div class="container header__container">
      <div
        class="burger header__burger"
        @click="toggleMenu"
        :class="{
          burger_open: state.menuActive,
        }"
      >
        <div class="burger__line"></div>
        <div class="burger__line"></div>
        <div class="burger__line"></div>
      </div>
      <NuxtLink to="/" class="logo header__logo">
        <figure class="logo__container">
          <svg
            class="logo__icon"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect class="logo__icon-bg" width="512" height="512" rx="26" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M284.979 19.0067H473.403C478.592 19.0067 483.569 21.0947 487.243 24.8129C490.917 28.5311 492.987 33.5758 493 38.8406V230.022C493 235.295 490.935 240.353 487.26 244.081C483.585 247.81 478.6 249.905 473.403 249.905H284.979C279.781 249.905 274.797 247.81 271.122 244.081C267.446 240.353 265.382 235.295 265.382 230.022V38.8903C265.382 33.6169 267.446 28.5594 271.122 24.8305C274.797 21.1016 279.781 19.0067 284.979 19.0067ZM430.973 196.26C437.692 189.906 442.931 182.111 446.307 173.443C450.517 161.171 452.396 148.2 451.843 135.217C451.905 125.152 450.653 115.123 448.12 105.392C445.877 96.346 441.788 87.8786 436.117 80.5371C430.583 73.4278 423.394 67.8251 415.197 64.2325C404.588 60.064 393.252 58.1358 381.882 58.5657H312.264V212.664H381.882C391.346 212.505 400.749 211.102 409.857 208.488C417.771 206.215 425.019 202.018 430.973 196.26Z"
              class="logo__icon-letter"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M38.5497 19.0067H227.023C232.212 19.0067 237.189 21.0947 240.863 24.8129C244.537 28.5311 246.607 33.5758 246.62 38.8406V230.022C246.62 235.295 244.555 240.353 240.88 244.081C237.205 247.81 232.221 249.905 227.023 249.905H38.5497C33.3523 249.905 28.3677 247.81 24.6926 244.081C21.0174 240.353 18.9528 235.295 18.9528 230.022V38.8903C18.9528 33.6169 21.0174 28.5594 24.6926 24.8305C28.3677 21.1016 33.3523 19.0067 38.5497 19.0067ZM167.984 204.928C176.354 200.747 183.311 194.138 187.973 185.939C192.568 177.929 194.954 168.812 194.881 159.544C195.068 153.13 193.617 146.777 190.668 141.102C187.911 135.985 183.872 131.698 178.958 128.674C174.739 126.341 170.197 124.665 165.486 123.703C171.951 120.377 177.531 115.517 181.751 109.536C185.314 104.218 187.194 97.9228 187.14 91.4919C187.226 86.0507 186.073 80.6628 183.77 75.7481C181.467 70.8334 178.077 66.5247 173.863 63.1577C165.192 55.7014 150.739 51.9235 130.897 51.9235C113.652 51.9235 100.326 55.3534 90.9193 62.2133C81.2256 69.5031 74.443 80.0907 71.8123 92.0387L111.741 99.495C112.087 93.6157 114.286 88.0047 118.012 83.4887C119.633 81.9415 121.544 80.7396 123.631 79.9541C125.718 79.1686 127.939 78.8155 130.162 78.9155C132.236 78.7996 134.312 79.1096 136.265 79.8271C138.218 80.5446 140.008 81.6548 141.528 83.091C142.924 84.5865 144.007 86.3523 144.715 88.2826C145.422 90.2129 145.738 92.2682 145.644 94.3253C145.664 96.7235 145.18 99.0986 144.226 101.293C143.271 103.487 141.867 105.45 140.108 107.051C138.27 108.83 136.103 110.221 133.731 111.143C131.359 112.065 128.83 112.499 126.292 112.419C124.453 112.359 122.62 112.176 120.805 111.873L118.649 142.444C123.075 140.991 127.671 140.139 132.318 139.909C135.035 139.798 137.744 140.263 140.275 141.272C142.805 142.282 145.101 143.815 147.016 145.774C150.875 150.387 152.824 156.338 152.454 162.377C152.745 168.5 150.73 174.506 146.82 179.179C145.058 181.217 142.877 182.839 140.431 183.93C137.984 185.021 135.332 185.554 132.661 185.492C127.763 185.673 122.992 183.886 119.384 180.521C115.103 175.477 112.422 169.24 111.692 162.626L69.5587 168.292C71.8572 176.986 75.8928 185.108 81.4148 192.153C86.6311 198.584 93.3752 203.562 101.012 206.618C111.504 210.325 122.587 212.011 133.69 211.589C145.474 212.069 157.208 209.79 167.984 204.928Z"
              class="logo__icon-letter"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M370.453 94H359V177.891H370.26C377.264 178.376 384.285 177.241 390.808 174.569C395.229 172.019 398.636 167.946 400.433 163.066C403.197 154.476 404.372 145.428 403.897 136.392C403.897 120.129 401.347 109.023 396.198 102.974C391.049 96.9253 382.387 94 370.453 94Z"
              class="logo__icon-letter"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M38.5444 262.183H227.018C232.215 262.183 237.2 264.278 240.875 268.007C244.55 271.736 246.615 276.794 246.615 282.067V473.298C246.615 478.571 244.55 483.629 240.875 487.358C237.2 491.087 232.215 493.181 227.018 493.181H38.5444C33.3469 493.181 28.3624 491.087 24.6873 487.358C21.0121 483.629 18.9474 478.571 18.9474 473.298V282.067C18.9474 276.794 21.0121 271.736 24.6873 268.007C28.3624 264.278 33.3469 262.183 38.5444 262.183ZM66.424 429.892H143.244V458.525H179.988V429.743H199.046V396.538H179.988V302.091H143.244L66.424 394.698V429.892ZM143.244 348.27V396.687H102.678L143.244 348.27Z"
              class="logo__icon-letter"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M284.979 262.183H473.403C478.6 262.183 483.585 264.278 487.26 268.007C490.935 271.736 493 276.794 493 282.067V473.298C493 478.571 490.935 483.629 487.26 487.358C483.585 491.087 478.6 493.181 473.403 493.181H284.979C279.781 493.181 274.797 491.087 271.122 487.358C267.446 483.629 265.382 478.571 265.382 473.298V282.067C265.382 276.794 267.446 271.736 271.122 268.007C274.797 264.278 279.781 262.183 284.979 262.183ZM451.307 302.091H404.519L404.617 395.991C404.857 399.603 404.373 403.228 403.195 406.645C402.016 410.063 400.166 413.202 397.758 415.875C392.411 420.404 385.666 422.885 378.7 422.885C371.734 422.885 364.99 420.404 359.642 415.875C357.232 413.204 355.381 410.065 354.202 406.647C353.023 403.229 352.54 399.604 352.783 395.991V302.091H305.996V393.804C306.243 402.589 307.728 411.294 310.405 419.652C312.431 426.19 315.767 432.232 320.203 437.399C324.71 442.807 330.178 447.31 336.322 450.671C343.193 454.064 350.612 456.169 358.221 456.885C366.235 457.891 374.3 458.423 382.375 458.475C393.521 458.817 404.637 457.134 415.199 453.504C422.291 450.697 428.695 446.354 433.964 440.779C439.865 434.821 444.355 427.58 447.093 419.603C449.926 411.307 451.351 402.583 451.307 393.804V302.091Z"
              class="logo__icon-letter"
            />
          </svg>
          <figcaption class="logo__caption header__logo-caption">
            Cтудия <br />3D-визуализации <br />3D FOR YOU
          </figcaption>
        </figure>
      </NuxtLink>
      <nav
        class="nav header__nav"
        :class="{
          header__nav_mobile: state.menuActive,
        }"
      >
        <ul class="nav__list">
          <li class="nav__item">
            <div class="select">
              <NuxtLink to="#" class="link select__link nav__link"
                >Визуализация мебели</NuxtLink
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
                  <NuxtLink to="#" class="link select__link"
                    >Мягкая мебель</NuxtLink
                  >
                </li>
                <li class="select__item">
                  <NuxtLink to="#" class="link select__link"
                    >Корпусная мебель</NuxtLink
                  >
                </li>
                <li class="select__item">
                  <NuxtLink to="#" class="link select__link"
                    >Обеденные группы</NuxtLink
                  >
                </li>
                <li class="select__item">
                  <NuxtLink to="#" class="link select__link">Дверь</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav__item">
            <NuxtLink to="#" class="link nav__link">Верстка каталогов</NuxtLink>
          </li>
          <li class="nav__item">
            <div class="select">
              <NuxtLink to="#" class="link select__link nav__link"
                >Дизайн-проекты</NuxtLink
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
                  <NuxtLink to="#" class="link select__link"
                    >Мягкая мебель</NuxtLink
                  >
                </li>
                <li class="select__item">
                  <NuxtLink to="#" class="link select__link"
                    >Корпусная мебель</NuxtLink
                  >
                </li>
                <li class="select__item">
                  <NuxtLink to="#" class="link select__link"
                    >Обеденные группы</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="nav__item">
            <NuxtLink to="#" class="link nav__link">3D-тур</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="#" class="link nav__link"
              >Онлайн-конструктор</NuxtLink
            >
          </li>
          <li class="nav__item">
            <NuxtLink to="#" class="link nav__link">О нас</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="#" class="link nav__link">Контакты</NuxtLink>
          </li>
        </ul>
        <Button
          class="button button_transparent nav__button"
          type="submit"
          @submit.prevent
          :text="'Заказать проект'"
        >
          <template #icon
            ><svg
              class="button__icon button__icon_light"
              viewBox="0 0 22 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1874 5.5V14.4375C17.1874 14.6198 17.115 14.7947 16.986 14.9236C16.8571 15.0526 16.6822 15.125 16.4999 15.125C16.3176 15.125 16.1427 15.0526 16.0138 14.9236C15.8848 14.7947 15.8124 14.6198 15.8124 14.4375V7.15945L5.9863 16.9864C5.8573 17.1154 5.68233 17.1879 5.49989 17.1879C5.31746 17.1879 5.14249 17.1154 5.01349 16.9864C4.88448 16.8574 4.81201 16.6824 4.81201 16.5C4.81201 16.3176 4.88448 16.1426 5.01349 16.0136L14.8404 6.1875H7.56239C7.38006 6.1875 7.20519 6.11507 7.07626 5.98614C6.94733 5.8572 6.87489 5.68234 6.87489 5.5C6.87489 5.31766 6.94733 5.1428 7.07626 5.01386C7.20519 4.88493 7.38006 4.8125 7.56239 4.8125H16.4999C16.6822 4.8125 16.8571 4.88493 16.986 5.01386C17.115 5.1428 17.1874 5.31766 17.1874 5.5Z"
              />
            </svg>
          </template>
        </Button>
      </nav>
      <Button
        class="button button_transparent header__button"
        type="submit"
        @submit.prevent
        :text="'Заказать проект'"
      >
        <template #icon
          ><svg
            class="button__icon button__icon_light header__button-icon"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1874 5.5V14.4375C17.1874 14.6198 17.115 14.7947 16.986 14.9236C16.8571 15.0526 16.6822 15.125 16.4999 15.125C16.3176 15.125 16.1427 15.0526 16.0138 14.9236C15.8848 14.7947 15.8124 14.6198 15.8124 14.4375V7.15945L5.9863 16.9864C5.8573 17.1154 5.68233 17.1879 5.49989 17.1879C5.31746 17.1879 5.14249 17.1154 5.01349 16.9864C4.88448 16.8574 4.81201 16.6824 4.81201 16.5C4.81201 16.3176 4.88448 16.1426 5.01349 16.0136L14.8404 6.1875H7.56239C7.38006 6.1875 7.20519 6.11507 7.07626 5.98614C6.94733 5.8572 6.87489 5.68234 6.87489 5.5C6.87489 5.31766 6.94733 5.1428 7.07626 5.01386C7.20519 4.88493 7.38006 4.8125 7.56239 4.8125H16.4999C16.6822 4.8125 16.8571 4.88493 16.986 5.01386C17.115 5.1428 17.1874 5.31766 17.1874 5.5Z"
            />
          </svg>
        </template>
      </Button>
    </div>
  </header>
</template>
<script setup>
import Button from '@/shared/UI/Button';
import { reactive } from 'vue';

const state = reactive({
  menuActive: false,
});

const toggleMenu = () => {
  state.menuActive = !state.menuActive;
};
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';

.header {
  position: fixed;
  width: 100%;
  z-index: 2;
  background: linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.5) 50%);

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-height: 78px;
  }

  &__logo-caption {
    margin: 0 0 0 10px;
  }

  &__button {
    display: none;
  }
}

.select {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 0;

  &__link:hover ~ &__icon {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(0deg);
    fill: var(--secondary);
  }

  &__icon {
    margin: 0 0 0 4px;
    fill: var(--text);
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
    top: 38px;
    left: -12px;
    list-style-type: none;
    border-radius: 8px;
    background-color: var(--filler);
    min-width: 252px;
    padding: 0;

    &:focus-visible {
      opacity: 1;
    }
  }

  &__item {
    padding: 8px 12px;
    cursor: pointer;

    &:hover,
    &:active {
      background-color: var(--secondary);
    }

    &:first-child {
      border-radius: 8px 8px 0 0;
    }
    &:last-child {
      border-radius: 0 0 8px 8px;
    }
  }
  &__link {
    color: var(--text);
  }

  &__item > &__link {
    &:hover,
    &:active {
      color: var(--text);

      &::before {
        display: none;
      }
    }
  }
}

.nav {
  display: flex;
  align-items: center;

  &__list {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  &__item:not(:last-child) {
    margin: 0 20px 0 0;
  }

  &__link {
    color: var(--text);
  }

  &__button {
    display: none;
  }
}

@media screen and (max-width: 1136px) {
  .header {
    &__container {
      padding-top: 12px;
      min-height: 60px;
    }

    &__nav {
      opacity: 0;
      visibility: hidden;
      position: fixed;
      top: 0;
      left: -100%;
      z-index: 2;
      width: 100%;
      height: 100%;
      background: var(--page-bg);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      transition: all 0.4s ease-in-out;

      &_mobile {
        opacity: 1;
        visibility: visible;
        left: 0;
      }
    }

    &__burger {
      display: block;
      z-index: 3;
    }

    &__logo {
      position: fixed;
      left: calc(50% - 23px);
      top: 12px;

      &-caption {
        display: none;
      }
    }

    &__button {
      display: block;
      padding: 8px 34px 8px 16px;
      min-height: 0;
    }
  }

  .nav {
    &__list {
      flex-direction: column;
      width: 100%;
      margin: 78px 0 0 0;
    }

    &__item {
      border-top: 1px solid var(--text-elements);
      width: 100%;
      padding: 16px;

      &:not(:last-child) {
        margin: 0;
      }

      &:last-child {
        border-bottom: 1px solid var(--text-elements);
      }
    }

    &__link {
      color: var(--text);
    }

    &__button {
      display: block;
      max-width: 328px;
      width: 100%;
      margin: 0 0 30px;
      text-decoration: none;
    }
  }

  .select {
    flex-direction: column;
    align-items: start;
    padding: 0;

    &__icon {
      display: none;
    }

    &__list {
      width: 100%;
      position: static;
      opacity: 1;
      visibility: visible;
      background-color: inherit;
    }

    &__item {
      padding: 16px 12px 0;
      box-sizing: border-box;

      &:hover,
      &:active {
        background-color: inherit;
      }
    }
    &__item > &__link {
      color: var(--link-text);
    }
  }
}

@media screen and (max-width: 540px) {
  .header {
    &__button {
      border: none;
      padding: 0;

      &-icon {
        right: 0;
        top: -16px;
        width: 32px;
        height: 32px;
      }
    }

    &__button .button__text {
      display: none;
    }
  }
}
</style>
