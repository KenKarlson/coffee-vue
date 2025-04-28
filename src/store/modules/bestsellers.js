const bestsellers = {
  namespaced: true,
  state: {
    bestsCards: [
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
  },
  mutations: {}, // Мутасион
  actions: {}, // Аксион
  getters: {
    // Гетерсион ;) три индуса
    getBestCoffee: (state) => state.bestsCards, //Упгастить и получить
  },
};
export default bestsellers; //Тадам... експорт решает фсе )))
