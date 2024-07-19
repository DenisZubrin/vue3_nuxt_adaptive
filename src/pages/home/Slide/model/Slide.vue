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
    color: $gray5;
    margin: 0 0 24px;
  }

  &__description {
    @extend %p3;
    color: $gray5;
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
    border-top: 1px solid $gray30;

    &:last-child {
      border-bottom: 1px solid $gray30;
    }
  }

  &__link {
    @extend %s3;
    color: $white;
    text-decoration: none;

    &-icon {
      width: 22px;
      height: 22px;
      fill: $white;
    }

    &:hover {
      color: $green;
      transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__link:hover ~ &__link-icon {
    fill: $green;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

@media screen and (max-width: 768px) {
  .slide {
    &__container {
      flex-direction: column;
      justify-content: end;
      align-items: center;
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
  }
}
</style>
