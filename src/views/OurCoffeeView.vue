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
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
              />
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
              <ShopCard
                v-for="card in coffee"
                :key="card.id"
                :name="card.name"
                :price="card.price"
                :image="card.image"
                :country="card.country"
                classItem="shop__item"
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
  components: { NavBarComponent, ShopCard },
  data() {
    return {
      coffee: [
        {
          id: 0,
          name: 'Rerum autem',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: 'Abrikosiya',
        },
        {
          id: 1,
          name: 'Aqwqwerty',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: 'Redretya',
        },
        {
          id: 2,
          name: 'Surtyus',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: 'Tnglia',
        },
        {
          id: 3,
          name: 'Shtreust',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: 'Dorchinland',
        },
        {
          id: 4,
          name: 'Frutiki',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: 'Sibiria',
        },
        {
          id: 5,
          name: 'Fifting',
          price: 10.73,
          image: 'coffee-1.jpg',
          country: 'Lifirpul',
        },
      ],
    };
  },
};
</script>
