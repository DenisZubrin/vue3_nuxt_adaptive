<template>
  <div class="app">
    <Header />
    <main class="main">
      <!-- output the page content-->
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';

</script>
<style lang="scss"></style>
