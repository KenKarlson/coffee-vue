<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <router-link
              tag="li"
              v-for="(link, index) in links"
              :key="index"
            ></router-link>
            <nav-item
              classLink="footer__item"
              :link="links[1].link"
              :text="links[1].text"
            ></nav-item>
            <nav-item
              classLink="footer__item"
              :link="links[2].link"
              :text="links[2].text"
            ></nav-item>
            <nav-item
              classLink="footer__item"
              :link="links[3].link"
              :text="links[3].text"
            ></nav-item>
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
import NavItem from './NavItem.vue';
export default {
  name: 'FooterComponent',
  components: { NavItem },
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
