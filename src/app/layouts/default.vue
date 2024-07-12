<template lang="">
  <div>
    <Header />
    <!-- output the page content-->
    <div>
      <slot />
    </div>
  </div>
</template>
<script>
import Header from '@/widgets/Header';
export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss"></style>
