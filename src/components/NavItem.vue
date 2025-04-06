<template>
  <li :class="classLink">
    <router-link :to="link">{{ text }}</router-link>
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
    classLink: {
      type: String,
      required: true,
      default: '',
    },
    classText: {
      type: String,
    },
  },
};
</script>
