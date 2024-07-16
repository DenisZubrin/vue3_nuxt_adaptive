<template>
  <main class="main">
    <swiper
      :direction="'vertical'"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :modules="modules"
      :mousewheel="true"
    >
      <!-- :autoHeight="true" :calculateHeight="true" -->
      <swiper-slide
        ><Slide
          :links="[
            'Корпусная мебель',
            'Мягкая мебель',
            'Обеденные группы',
            'Двери',
          ]"
        >
          <template #heading>
            <h2 class="slider__heading">Визуализация мебели</h2>
          </template>
          <template #description>
            <p class="slider__description">
              Такой уровень реализма, что отличить смоделированную мебель от
              реальной смогут лишь профессионалы.
            </p>
          </template>
        </Slide></swiper-slide
      >
      <swiper-slide
        ><Slide :links="['Смотреть проекты']">
          <template #heading>
            <h2 class="slider__heading">Верстка каталогов</h2>
          </template>
          <template #description>
            <p class="slider__description">
              Профессиональная верстка каталогов подчеркнет все достоинства
              вашего товара и поможет грамотно его презентовать.
            </p>
          </template>
        </Slide></swiper-slide
      >
      <swiper-slide
        ><Slide :links="['Интерьеры', 'Экстерьеры', 'Торговые помещения']">
          <template #heading>
            <h2 class="slider__heading">Дизайн-проекты</h2>
          </template>
          <template #description>
            <p class="slider__description">
              От квартиры-студии до торгового центра – реалистичная
              3D-визуализация с максимальной точностью покажет будущее
              помещение.
            </p>
          </template>
        </Slide></swiper-slide
      >
      <swiper-slide
        ><Slide :links="['Смотреть проекты']">
          <template #heading>
            <h2 class="slider__heading">3D-тур</h2>
          </template>
          <template #description>
            <p class="slider__description">
              Современное решение для красочной и наглядной презентации
              помещения. Прогуляйтесь по виртуальному объекту, не выходя из
              дома.
            </p>
          </template>
        </Slide></swiper-slide
      >
      <swiper-slide
        ><Slide :links="['Смотреть проекты']">
          <template #heading>
            <h2 class="slider__heading">Онлайн-конструктор</h2>
          </template>
          <template #description>
            <p class="slider__description">
              Удобный и функциональный инструмент для визуализации и расчета
              стоимости мебели в помещении.
            </p>
          </template>
        </Slide></swiper-slide
      >
    </swiper>
    <Info />
    <Showcase />

  </main>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/mousewheel';

import Slide from '@/pages/home/Slide';
import Info from '@/pages/home/Info';
import Showcase from '@/pages/home/Showcase';

export default {
  components: {
    Slide,
    Info,
    Showcase,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Mousewheel],
    };
  },
};
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';
.container {
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
}

//Swiper стили

.swiper {
  // height: 100vh;
  max-height: 886px;
  z-index: 0;
}

.swiper-slide {
  // max-height: 886px;
  // height: 100svh;
  // height: 100%;
}

.swiper-pagination {
  margin: 0 40px 0 0;

  &-bullet {
    width: 6px;
    height: 6px;
    background-color: $gray5;

    &-active {
      width: 12px;
      height: 12px;
      position: relative;
      right: 2.5px;
      background-color: $white;
    }
  }
}
</style>
