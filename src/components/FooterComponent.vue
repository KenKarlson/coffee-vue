<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <li class="footer__item">
              <router-link to="/">
                <img
                  :src="require(`@/assets/logo/${links[0].icon}`)"
                  :alt="links[0].icon"
                />
              </router-link>
            </li>
            <li class="footer__item">
              <router-link :to="links[1].link">{{ links[1].text }}</router-link>
            </li>
            <li class="footer__item">
              <router-link :to="links[2].link">{{ links[2].text }}</router-link>
            </li>
            <li class="footer__item">
              <router-link :to="links[3].link">{{ links[3].text }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        :src="require(`@/assets/logo/${beanslogo}`)"
        :alt="beanslogo"
      />
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      beanslogo: 'Beans_logo_dark.svg',
      links: [
        { id: 0, text: '', link: '/', icon: 'Logo_black.svg' },
        { id: 1, text: 'Our coffee', link: '/our-coffee' },
        { id: 2, text: 'For you pleasure', link: '/goodspage' },
        { id: 3, text: 'Contact us', link: '/contacts' },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>
