<template lang="">
  <div>
    <Header />
    <!-- output the page content-->
    <div>
      <slot />
    </div>
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
