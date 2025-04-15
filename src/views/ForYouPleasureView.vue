<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component></nav-bar-component>
            <router-view> </router-view>
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl" />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord
              horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend objection do
              intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold feel<br />
              met spot shy want. Children me laughing we prospect answered followed. At it
              went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <ShopCard
                v-for="card in goods"
                :key="card.id"
                :name="card.name"
                :price="card.price"
                :image="card.image"
                :country="card.country"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import ShopCard from '@/components/ShopCard.vue';
export default {
  name: 'ForYouPleasureView',
  components: {
    NavBarComponent,
    ShopCard,
  },
  data() {
    return {
      goods: [
        {
          id: 0,
          name: '',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: 'Russia',
        },
        {
          id: 1,
          name: '',
          price: 10.73,
          image: 'coffee-2.jpg',
          country: 'Russia',
        },
        {
          id: 2,
          name: '',
          price: 10.73,
          image: 'coffee-3.jpg',
          country: 'Brazilia',
        },
        {
          id: 3,
          name: '',
          price: 10.73,
          image: 'coffee-4.jpg',
          country: 'Bustan',
        },
        {
          id: 4,
          name: '',
          price: 10.73,
          image: 'coffee-2.jpg',
          country: 'Sibiria',
        },
        {
          id: 5,
          name: '',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: 'Abrikosia',
        },
      ],
    };
  },
};
</script>
