const catalog = {
  namespaced: true,
  state: {
    coffee: [
      {
        id: 0,
        name: 'Rerum autem',
        price: 12.73,
        image: 'coffee-1.jpg',
        country: 'Brazil',
      },
      {
        id: 1,
        name: 'Aqwqwerty',
        price: 9.5,
        image: 'coffee-2.jpg',
        country: 'Kenya',
      },
      {
        id: 2,
        name: 'Surtyus Coffee',
        price: 10.5,
        image: 'coffee-3.jpg',
        country: 'Kenya',
      },
      {
        id: 3,
        name: 'Shtreust DE',
        price: 12.45,
        image: 'coffee-1.jpg',
        country: 'Columbia',
      },
      {
        id: 4,
        name: 'Frutiki Yu',
        price: 9.99,
        image: 'coffee-1.jpg',
        country: 'Brazil',
      },
      {
        id: 5,
        name: 'Fifting',
        price: 13.99,
        image: 'coffee-1.jpg',
        country: 'Columbia',
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getCatalog(state) {
      return { coffee: state.coffee };
    },
  },
};

export default catalog;
