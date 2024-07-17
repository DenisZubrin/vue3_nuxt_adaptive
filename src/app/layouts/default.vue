<template>
  <div>
    <Header />
    <main>
      <!-- output the page content-->
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';

export default {
  components: {
    Header,
    Footer
  },
};
</script>
<style lang="scss"></style>
