<template>
  <div>
    <Slider :links="['Корпусная мебель', 'Не корпусная мебель']">
      <template #heading>
        <h2 class="heading">Мой заголовок</h2>
      </template>
      <template #description>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          aspernatur.
        </p>
      </template>
    </Slider>
    <Slider />
    <Slider />
  </div>
</template>
<script>
import Slider from '@/pages/home/Slider';
export default {
  components: {
    Slider,
  },
};
</script>
<style lang="scss"></style>
