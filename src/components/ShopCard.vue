<template>
  <div class="shop__item">
    <img :src="require(`@/assets/img/${image}`)" :alt="image" />
    <div class="shop__item-title">{{ name }}</div>
    <div class="shop__item-country">{{ country }}</div>
    <div class="shop__item-price">{{ price }}$</div>
  </div>
</template>
<script>
export default {
  props: {
    // здесь объявляются наши пропсы :)
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: false,
      default: 'Russia'
    }

  },computed: {
    imageSrc() {
      try {
        return require(`@/assets/img/${this.image}`)
      } catch {
        return require('@/assets/img/default-coffee.jpg')
      }
    }
  },
  data() {
    return {
      // здесь объявляются наши реактивные данные
    }
  }
}
</script>
