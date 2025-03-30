<template>
  <div class="wrapper">
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import HeroView from "@/views/HeroView.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: { HeroView, FooterComponent },
};
</script>

<style lang="scss">
</style>
