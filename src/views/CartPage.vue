<template>
  <div class="cart">
    <router-link to="/">home</router-link>
    <div class="cart__body">
      <div class="cart__title">Корзина</div>
      <div class="cart__row">
        <CartProductCard
          v-for="(cartProduct, index) in allCartProductCard"
          :key="index"
          :cartProduct="cartProduct"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CartProductCard from "@/components/CartProductCard";
import { mapGetters } from "vuex";
export default {
  components: {
    CartProductCard,
  },
  computed: {
    ...mapGetters(["allCartProductCard"]),
  },
};
</script>
<style>
.cart {
}
.cart__body {
  width: 1226px;
  height: 734px;
  margin: 0 auto;
  padding: 20px;
}
.cart__title {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 17px;
}
.cart__row {
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 20px;
}
</style>
