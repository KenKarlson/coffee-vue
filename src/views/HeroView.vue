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

            <a href="./coffeepage.html" class="preview__btn">More</a>
          </div>
        </div>
      </div>
    </div>
    <!--about-->
    <section class="about">
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
    <section class="best">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <ProductCard
                :name="bestsellers[0].name"
                :price="bestsellers[0].price"
                :image="bestsellers[0].image"
              />
              <ProductCard
                :name="bestsellers[1].name"
                :price="bestsellers[1].price"
                :image="bestsellers[1].image"
              />
              <ProductCard
                :name="bestsellers[2].name"
                :price="bestsellers[2].price"
                :image="bestsellers[2].image"
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
export default {
  components: { NavBarComponent, ProductCard },
  data() {
    return {
      bestsellers: [
        {
          id: 0,
          name: 'AROMISTICO Coffee 1kg',
          price: 10.73,
          image: 'coffee-1.jpg',
        },
        {
          id: 1,
          name: 'BRASIL Monkey',
          price: 15.99,
          image: 'coffee-2.jpg',
        },
        {
          id: 2,
          name: 'ASERTYB Coffee',
          price: 6.99,
          image: 'coffee-3.jpg',
        },
      ],
    };
  },
};
</script>
<style>
</style>
