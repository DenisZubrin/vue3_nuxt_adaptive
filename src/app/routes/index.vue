<template>
  <swiper
    name="top"
    :direction="'vertical'"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    :modules="modules"
    :mousewheel="{releaseOnEdges: true}"
  >
    <!-- :autoHeight="true" :calculateHeight="true" :releaseOnEdges="true"-->
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <Slide :heading="slide.heading" :description="slide.description" :image="slide.image" :links="slide.links"/>
    </swiper-slide>
  </swiper>
  <Info />
  <Showcase />
  <ContactUs />
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
import ContactUs from '@/pages/home/ContactUs';

import { reactive } from 'vue';

export default {
  components: {
    Slide,
    Info,
    Showcase,
    ContactUs,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = reactive([
      {
        image: 'slider_bg_1.png',
        heading: 'Визуализация мебели',
        description: 'Такой уровень реализма, что отличить смоделированную мебель от реальной смогут лишь профессионалы.',
        links: [
          'Корпусная мебель',
          'Мягкая мебель',
          'Обеденные группы',
          'Двери',
        ]
      },
      {
        image: 'slider_bg_2.png',
        heading: 'Верстка каталогов',
        description: 'Профессиональная верстка каталогов подчеркнет все достоинства вашего товара и поможет грамотно его презентовать.',
        links: ['Смотреть проекты']
      },
      {
        image: 'slider_bg_3.png',
        heading: 'Дизайн-проекты',
        description: 'От квартиры-студии до торгового центра – реалистичная 3D-визуализация с максимальной точностью покажет будущее помещение.',
        links: ['Интерьеры', 'Экстерьеры', 'Торговые помещения']
      },
      {
        image: 'slider_bg_4.png',
        heading: '3D-тур',
        description: 'Современное решение для красочной и наглядной презентации помещения. Прогуляйтесь по виртуальному объекту, не выходя из дома.',
        links: ['Смотреть проекты']
      },
      {
        image: 'slider_bg_5.png',
        heading: 'Онлайн-конструктор',
        description: 'Удобный и функциональный инструмент для визуализации и расчета стоимости мебели в помещении.',
        links: ['Смотреть проекты']
      },
    ]);
    return {
      modules: [Pagination, Mousewheel],
      slides
    };
  },
};
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';

// Настройки свайпера - в отдельный файл. Глобальные стили - в отдельный файл
.container {
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
}

//Swiper стили

.swiper,
.swiper-wrapper {
  width: 100%;
  height: 100vh;
  z-index: 0;
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
