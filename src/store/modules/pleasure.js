const pleasure = {
  namespaced: true,
  state: {
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
  },
  getters: {
    getGoodsCoffee: (state) => state.goods, //Упрастим)) опять))))
  },
};
export default pleasure;
