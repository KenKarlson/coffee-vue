<template>
  <li class="footer__item">
    <ro uter-link :to="link">{{ text }}</ro>
  </li>
</template>

<script>
export default {
  name: 'NavLinks',
  props: {
    link: {
      type: String,
      required: true,
      default: '/',
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
