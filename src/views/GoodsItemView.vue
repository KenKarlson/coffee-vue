<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <!--navbar-->
            <NavBarComponent />
          </div>
        </div>
        <h1 class="title-big">Our Coffee</h1>
      </div>
    </div>
  </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
export default {
  components: { NavBarComponent },
};
</script>
