<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <!--navbar-->
            <NavBarComponent />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h1 class="title-big">Everything You Love About Coffee</h1>
            <img class="beanslogo" src="@/assets/logo/Beans_logo.svg" alt="Beans logo" />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>

            <a href="./coffeepage.html" class="preview__btn" @click.prevent="smoothScrol"
              >More</a
            >
          </div>
        </div>
      </div>
    </div>
    <!--about-->
    <section class="about" id="about" ref="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord
              horrible. Afraid at highly months do things on at. Situation recommend
              objection do intention so questions. As greatly removed calling pleased
              improve an. Last ask him cold feel met spot shy want. Children me laughing
              we prospect answered followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his bed her,
              Much read on as draw. Blessing for ignorant exercise any yourself unpacked.
              Pleasant horrible but confined day end marriage. Eagerness furniture set
              preserved far recommend. Did even but nor are most gave hope. Secure active
              living depend son repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--best-->
    <section class="best" ref="ourBest">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <ProductCard
                v-for="card in bestsellers"
                :key="card.id"
                :card = "card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--footer-->
  </main>
</template>
<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import ProductCard from '@/components/ProductCard.vue';
import { scrollIntoView } from 'seamless-scroll-polyfill';
export default {
  components: { NavBarComponent, ProductCard },
  computed: {
    bestsellers() {
      return this.$store.getters['bestsellers/getBestCoffee']; // :)
    },
  },
  methods: {
    smoothScrol() {
      scrollIntoView(this.$refs.ourBest, {
        behavior: 'smooth',
        block: 'start',
      });
    },
  },
  mounted() {},
  beforeUnmount() {},
};
</script>
<style>
</style>
