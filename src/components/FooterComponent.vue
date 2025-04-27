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
  computed: {
    links() {
      return this.$store.getters['getFooterLinks'];
    },
    beanslogo() {
      return this.$store.getters['getBeanslogo'];
    },
  },
};
</script>


<style lang="scss">
.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 12px;
  font-weight: normal;
  color: #999999;
  letter-spacing: 0.04em;
  padding: 10px;
  margin-bottom: 0;
  width: 4px;
  height: 100%;
  border-left: 2px solid orangered;
  &__item {
    &:not(:last-child)::after {
      content: '/';
      padding: 0 10px;
    }
  }
}
</style>
