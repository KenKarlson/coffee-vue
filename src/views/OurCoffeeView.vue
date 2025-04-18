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
        <!----catalog---->
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <ShopCard
                v-for="card in filteredCoffee"
                :key="card.id"
                :name="card.name"
                :price="card.price"
                :image="card.image"
                :country="card.country"
                classItem="shop__item"
              />
              <!-- <ShopCard
                v-for="card in filteredCoffee"
                :key="card.id"
                :name="card.name"
                :price="card.price"
                :image="card.image"
                :country="card.country"
                classItem="shop__item"
              /> -->
            </div>
          </div>
        </div>
        <!---!catalog---->
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'; // Добавленный импорт
import NavBarComponent from '@/components/NavBarComponent.vue';
import ShopCard from '@/components/ShopCard.vue';

export default {
  components: { NavBarComponent, ShopCard },
  data() {
    return {
      searchQuery: '',
      filterCountry: null,
      countries: ['Brazil', 'Kenya', 'Columbia'],
    };
  },
  computed: {
    ...mapGetters('catalog', ['allCoffee', 'coffeeByCountry']),

    filteredCoffee() {
      let result = this.allCoffee || [];

      if (this.filterCountry) {
        result = this.coffeeByCountry(this.filterCountry) || [];
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        result = result.filter(
          (item) =>
            item?.name?.toLowerCase().includes(query) ||
            item?.country?.toLowerCase().includes(query),
        );
      }

      return result;
    },
  },
  methods: {
    filterByCountry(country) {
      this.filterCountry = country === this.filterCountry ? null : country;
    },
    onSearchInput(event) {
      this.searchQuery = event.target.value;
    },
    getImagePath(imageName) {
      try {
        return require(`@/assets/img/${imageName}`);
      } catch {
        return require('@/assets/img/default-coffee.jpg');
      }
    },
  },
};
</script>
