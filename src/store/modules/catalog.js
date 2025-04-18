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
        price: 9.50,
        image: 'coffee-2.jpg',
        country: 'Kenya',
      },
      {
        id: 2,
        name: 'Surtyus Coffee',
        price: 10.50,
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
  mutations: {
    ADD_COFFEE_ITEM(state, newItem) {
      state.coffee.push(newItem);
    },
    UPDATE_COFFEE_ITEM(state, updatedItem) {
      const index = state.coffee.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        state.coffee.splice(index, 1, updatedItem);
      }
    },
    DELETE_COFFEE_ITEM(state, itemId) {
      state.coffee = state.coffee.filter(item => item.id !== itemId);
    },
    SET_COFFEE_PRICE(state, { id, newPrice }) {
      const item = state.coffee.find(item => item.id === id);
      if (item) {
        item.price = newPrice;
      }
    }
  },
  actions: {
    addCoffeeItem({ commit }, newItem) {
      commit('ADD_COFFEE_ITEM', {
        ...newItem,
        id: Date.now() // Генерируем уникальный ID
      });
    },
    updateCoffeeItem({ commit }, updatedItem) {
      commit('UPDATE_COFFEE_ITEM', updatedItem);
    },
    deleteCoffeeItem({ commit }, itemId) {
      commit('DELETE_COFFEE_ITEM', itemId);
    },
    updateCoffeePrice({ commit }, payload) {
      commit('SET_COFFEE_PRICE', payload);
    }
  },
  getters: {
    allCoffee: state => state.coffee,
    coffeeById: state => id => state.coffee.find(item => item.id === id),
    coffeeByCountry: state => country => state.coffee.filter(item =>
      item.country.toLowerCase().includes(country.toLowerCase())
    ),
    expensiveCoffee: state => minPrice => state.coffee.filter(item => item.price >= minPrice),
    cheapCoffee: state => maxPrice => state.coffee.filter(item => item.price <= maxPrice),
    coffeeCount: state => state.coffee.length
  }
};

export default catalog;
