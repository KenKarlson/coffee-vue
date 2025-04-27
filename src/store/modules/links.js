const links = {
  state: {
    header: { id: 0, link: '/', icon: 'Logo.svg' },
    footer: {
      id: 0,
      text: '',
      link: '/',
      icon: 'Logo_black.svg',
    },
    other: [
      { id: 0, text: 'Our coffee', link: '/our-coffee' },
      { id: 1, text: 'For you pleasure', link: '/goodspage' },
      { id: 2, text: 'Contact us', link: '/contacts' },
    ],
    beanslogo: 'Beans_logo_dark.svg',
  },
  mutations: {},
  actions: {},
  getters: {
    getHeaderLinks(state) {
      return { header: state.header, other: state.other };
    },
    getFooterLinks(state) {
      return { footer: state.footer, other: state.other };
    },
    getBeanslogo(state) {
      return state.beanslogo;
    },
  },
};
export default links;
