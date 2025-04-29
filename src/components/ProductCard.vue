//Only first page!
<template>
  <div class="best__item">
    <img :src="require(`@/assets/img/${card.image}`)" :alt="card.image" />
    <div class="best__item-title">{{ card.name }}</div>
    <div class="best__item-price">{{ card.price }}$</div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      require: true,
      validator: (value) => { //Проверим что как
        return 'name' in value && 'price' in value && 'image' in value;
      },
    },
  },
};
</script>
