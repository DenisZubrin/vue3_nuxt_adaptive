<template>
  <section class="main-screen">
    <swiper
      name="top"
      :direction="'vertical'"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :modules="modules"
      :mousewheel="{
        enabled: true,
        releaseOnEdges: true,
      }"
      :watchSlidesProgress="true"
      @slideNextTransitionEnd="onLastSlide"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <Slide
          :image="slide.image"
          :links="slide.links"
          :heading="slide.heading"
          :description="slide.description"
        />
      </swiper-slide>
    </swiper>
  </section>
  <Info />
  <Showcase />
  <ContactUs />
</template>
<script setup>
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

const modules = [Pagination, Mousewheel];
const slides = reactive([
  {
    image: 'slider_bg_1.png',
    heading: 'Визуализация мебели',
    description:
      'Такой уровень реализма, что отличить смоделированную мебель от реальной смогут лишь профессионалы.',
    links: ['Корпусная мебель', 'Мягкая мебель', 'Обеденные группы', 'Двери'],
  },
  {
    image: 'slider_bg_2.png',
    heading: 'Верстка каталогов',
    description:
      'Профессиональная верстка каталогов подчеркнет все достоинства вашего товара и поможет грамотно его презентовать.',
    links: ['Смотреть проекты'],
  },
  {
    image: 'slider_bg_3.png',
    heading: 'Дизайн-проекты',
    description:
      'От квартиры-студии до торгового центра – реалистичная 3D-визуализация с максимальной точностью покажет будущее помещение.',
    links: ['Интерьеры', 'Экстерьеры', 'Торговые помещения'],
  },
  {
    image: 'slider_bg_4.png',
    heading: '3D-тур',
    description:
      'Современное решение для красочной и наглядной презентации помещения. Прогуляйтесь по виртуальному объекту, не выходя из дома.',
    links: ['Смотреть проекты'],
  },
  {
    image: 'slider_bg_5.png',
    heading: 'Онлайн-конструктор',
    description:
      'Удобный и функциональный инструмент для визуализации и расчета стоимости мебели в помещении.',
    links: ['Смотреть проекты'],
  },
]);

const onLastSlide = (swiper) => {
  // window.scrollTo(0, 0);
  // const lastSlide = swiper.slides[swiper.slides.length - 1];

  if (swiper.isEnd) {
    // swiper.mousewheel.disable();
    // swiper.mousewheel.params.releaseOnEdges = true;
    // document.documentElement.style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    // swiper.className.add('no_scroll');
  }
};
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss';
@import '@/shared/assets/styles/swiper.scss';
</style>
