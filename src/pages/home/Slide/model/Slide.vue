<template>
  <section class="slide">
    <img
      class="slide__bg"
      :src="`/backgrounds/${image}`"
      alt="slider background"
    />
    <div class="container slide__container">
      <div class="slide__text">
        <h2 class="slide__heading" name="heading">{{ heading }}</h2>
        <p class="slide__description" name="description">{{ description }}</p>
      </div>
      <ul class="slide__list">
        <li v-for="(link, index) in links" :key="index" class="slide__item">
          <NuxtLink class="link slide__link" to="#">{{ link }}</NuxtLink>
          <svg
            class="slide__link-icon"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1874 5.5V14.4375C17.1874 14.6198 17.115 14.7947 16.986 14.9236C16.8571 15.0526 16.6822 15.125 16.4999 15.125C16.3176 15.125 16.1427 15.0526 16.0138 14.9236C15.8848 14.7947 15.8124 14.6198 15.8124 14.4375V7.15945L5.9863 16.9864C5.8573 17.1154 5.68233 17.1879 5.49989 17.1879C5.31746 17.1879 5.14249 17.1154 5.01349 16.9864C4.88448 16.8574 4.81201 16.6824 4.81201 16.5C4.81201 16.3176 4.88448 16.1426 5.01349 16.0136L14.8404 6.1875H7.56239C7.38006 6.1875 7.20519 6.11507 7.07626 5.98614C6.94733 5.8572 6.87489 5.68234 6.87489 5.5C6.87489 5.31766 6.94733 5.1428 7.07626 5.01386C7.20519 4.88493 7.38006 4.8125 7.56239 4.8125H16.4999C16.6822 4.8125 16.8571 4.88493 16.986 5.01386C17.115 5.1428 17.1874 5.31766 17.1874 5.5Z"
            />
          </svg>
        </li>
      </ul>
      <svg
        class="slide__indicator-icon"
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.354 10.6463C21.4005 10.6927 21.4374 10.7478 21.4626 10.8085C21.4877 10.8692 21.5007 10.9343 21.5007 11C21.5007 11.0657 21.4877 11.1308 21.4626 11.1915C21.4374 11.2522 21.4005 11.3073 21.354 11.3538L11.354 21.3538C11.3076 21.4002 11.2524 21.4371 11.1917 21.4623C11.1311 21.4874 11.066 21.5004 11.0003 21.5004C10.9346 21.5004 10.8695 21.4874 10.8088 21.4623C10.7481 21.4371 10.693 21.4002 10.6465 21.3538L0.646528 11.3538C0.600073 11.3073 0.563222 11.2521 0.538081 11.1915C0.51294 11.1308 0.5 11.0657 0.5 11C0.5 10.9343 0.51294 10.8693 0.538081 10.8086C0.563222 10.7479 0.600073 10.6927 0.646528 10.6463C0.692983 10.5998 0.748133 10.5629 0.80883 10.5378C0.869526 10.5127 0.934581 10.4997 1.00028 10.4997C1.06598 10.4997 1.13103 10.5127 1.19173 10.5378C1.25242 10.5629 1.30757 10.5998 1.35403 10.6463L11.0003 20.2925L20.6465 10.6463C20.693 10.5998 20.7481 10.5629 20.8088 10.5377C20.8695 10.5126 20.9346 10.4996 21.0003 10.4996C21.066 10.4996 21.1311 10.5126 21.1917 10.5377C21.2524 10.5629 21.3076 10.5998 21.354 10.6463ZM10.6465 11.3538C10.693 11.4002 10.7481 11.4371 10.8088 11.4623C10.8695 11.4874 10.9346 11.5004 11.0003 11.5004C11.066 11.5004 11.1311 11.4874 11.1917 11.4623C11.2524 11.4371 11.3076 11.4002 11.354 11.3538L21.354 1.35375C21.4005 1.3073 21.4373 1.25215 21.4625 1.19145C21.4876 1.13076 21.5006 1.0657 21.5006 1C21.5006 0.934306 21.4876 0.869252 21.4625 0.808555C21.4373 0.747859 21.4005 0.692708 21.354 0.646253C21.3076 0.599798 21.2524 0.562948 21.1917 0.537807C21.131 0.512665 21.066 0.499725 21.0003 0.499725C20.9346 0.499725 20.8695 0.512665 20.8088 0.537807C20.7481 0.562948 20.693 0.599798 20.6465 0.646253L11.0003 10.2925L1.35403 0.646253C1.26021 0.552433 1.13296 0.499725 1.00028 0.499725C0.867596 0.499725 0.740348 0.552433 0.646528 0.646253C0.552707 0.740073 0.5 0.867321 0.5 1C0.5 1.13269 0.552707 1.25993 0.646528 1.35375L10.6465 11.3538Z"
        />
      </svg>
    </div>
  </section>
</template>
<script setup>
defineProps({
  links: {
    type: Array,
  },
  image: {
    type: String,
    default: () => '/backgrounds/slider_bg_1.png',
  },
  heading: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';

.slide {
  position: relative;
  height: 100%;

  &__bg {
    position: absolute;
    top: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &__container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: end;
    padding-bottom: 40px;
    box-sizing: border-box;
    gap: 24px;
  }

  &__text {
    max-width: 668px;
    z-index: 1;
  }

  &__heading {
    @extend %h1;
    color: var(--c-text);
    margin: 0 0 24px;
  }

  &__description {
    @extend %p3;
    color: var(--c-text);
    margin: 0;
    width: 85%;
  }

  &__list {
    margin: 0;
    padding: 0;
    max-width: 417px;
    width: 100%;
    list-style-type: none;
    z-index: 1;
  }

  &__item {
    padding: 12px 0;
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    border-top: 1px solid var(--c-text-elements);

    &:last-child {
      border-bottom: 1px solid var(--c-text-elements);
    }
  }

  &__link {
    @extend %s3;
    color: var(--c-text);
    text-decoration: none;

    &-icon {
      width: 22px;
      height: 22px;
      fill: var(--c-text);
      position: relative;
      top: -1px;
      left: 3px;
    }

    &:hover {
      color: var(--c-secondary);
      transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__link:hover ~ &__link-icon {
    fill: var(--c-secondary);
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__indicator-icon {
    display: none;
  }
}

@keyframes pulse {
  from {
    opacity: 1;
    transform: translateY(0px);
  }
 
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}

@media screen and (max-width: 768px) {
  .slide {
    &__container {
      flex-direction: column;
      justify-content: end;
      align-items: center;
      padding-bottom: 16px;
    }

    &__text {
      max-width: 100%;
    }

    &__description {
      display: none;
    }

    &__item {
      justify-content: start;
    }

    &__indicator-icon {
      display: block;
      width: 22px;
      height: 22px;
      z-index: 1;
      fill: var(--c-text-elements);
      animation: pulse 2s infinite;
    }
  }
}
</style>
