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
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl" />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="row">
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input id="filter" type="text" placeholder="start typing here..." class="shop__search-input" />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn">Brazil</button>
                <button class="shop__filter-btn">Kenya</button>
                <button class="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <ShopCard :name="coffee[0].name" :price="coffee[0].price" :image="coffee[0].image" />
              <ShopCard :name="coffee[1].name" :price="coffee[1].price" :image="coffee[1].image" />
              <ShopCard :name="coffee[2].name" :price="coffee[2].price" :image="coffee[2].image" />
              <ShopCard :name="coffee[3].name" :price="coffee[3].price" :image="coffee[3].image" />
              <ShopCard :name="coffee[4].name" :price="coffee[4].price" :image="coffee[4].image" />
              <ShopCard :name="coffee[5].name" :price="coffee[5].price" :image="coffee[5].image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ShopCard from "@/components/ShopCard.vue";

export default {
  components: { NavBarComponent, ShopCard },
  data() {
    return {
      coffee: [
        {
          id: 0,
          name: '',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: ''
        },
        {
          id: 1,
          name: '',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: ''
        },
        {
          id: 2,
          name: '',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: ''
        },
        {
          id: 3,
          name: '',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: ''
        },
        {
          id: 4,
          name: '',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: ''
        },
        {
          id: 5,
          name: '',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: ''
        },
      ]
    }
  }
};
</script>