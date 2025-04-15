<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <!--image link nav-->
            <nav-item classLink="footer__item" :link="links.footer.link">
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                :alt="links.footer.icon"
              />
            </nav-item>
            <!--text link nav-->
            <nav-item
              v-for="link in links.other"
              :key="link.id"
              classLink="footer__item"
              :link="link.link"
              :text="link.text"
            />
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
      links: {
        footer: {
          id: 0,
          text: '',
          link: '/',
          icon: 'Logo_black.svg',
        },
        other: [
          { id: 1, text: 'Our coffee', link: '/our-coffee' },
          { id: 2, text: 'For you pleasure', link: '/goodspage' },
          { id: 3, text: 'Contact us', link: '/contacts' },
        ],
      },
    };
  },
};
</script>
<style lang="scss">
</style>
