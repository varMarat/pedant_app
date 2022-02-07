<template>
  <div class="cart-product-card">
    <div class="cart-product-card__img">
      <img :src="cartProduct.img" alt="" />
    </div>
    <div class="cart-product-card__info">
      <div class="cart-product-card__title">
        {{ cartProduct.name }}
      </div>
    </div>
    <div class="cart-product-card__price">
      <span>{{ cartProduct.price }}р</span>
      <button @click="removeFromCart">Удалить</button>
    </div>
    <div class="cart-product-card__count">{{ cartProduct.count }}</div>
  </div>
</template>
<script>
export default {
  name: "CartProductCard",
  props: ["cartProduct"],
  methods: {
    removeFromCart() {
      this.$store.commit("removeFromCart", this.cartProduct.id);
    },
  },
};
</script>
<style>
.cart-product-card {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 10px;
  position: relative;
}
.cart-product-card__img {
}
.cart-product-card__img img {
  display: block;
  max-height: 128px;
  margin: 0 auto;
}
.cart-product-card__info {
  flex-grow: 1;
  padding: 20px;
}
.cart-product-card__title {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 17px;
}
.cart-product-card__price {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.cart-product-card__price span {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 17px;
}
.cart-product-card__price button {
}
.cart-product-card__count {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 5px;
  top: 5px;
  border-radius: 100%;
  text-align: center;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 2px 2px rgba(14, 12, 12, 0.05);
}
</style>
