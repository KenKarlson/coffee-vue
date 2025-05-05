<template>
  <div class="shop__item" @click="onEmmit(card.id)">
    <img :src="require(`@/assets/img/${card.image}`)" :alt="card.image" />
    <div class="shop__item-title">{{ card.name }}</div>
    <div class="shop__item-country">{{ card.country }}</div>
    <div class="shop__item-price">{{ card.price }}$</div>
  </div>
</template>
<script>
export default {
  props: {
    // здесь объявляются наши пропсы :) Уже нет))))
    card: {
      type: Object,
      require: true,
    }
  },
  computed: {
    imageSrc() {
      try {
        return require(`@/assets/img/${this.image}`);
      } catch {
        return require('@/assets/img/default-coffee.jpg');
      }
    }
  },
  data() {
    return {
      // здесь объявляются наши реактивные данные
    }
  },
  methods: {
    onEmmit(id){
      console.log('Click to: ' + id +' id.');
    }
  }
}
</script>
