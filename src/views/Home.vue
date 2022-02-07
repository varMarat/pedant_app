<template>
  <div class="home">
    <router-link to="/cart">Корзина</router-link>
    <div class="catalog">
      <div class="device-wrapper">
        <CardProduct
          v-for="(product, index) in allProducts"
          :key="index"
          :product="product"
          :id="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardProduct from "@/components/CardProduct";
export default {
  components: {
    CardProduct,
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  mounted() {
    this.$store.dispatch("getCardProduct", {
      apiUrl: "./data.json",
    });
  },
};
</script>
<style>
.catalog {
  width: 1440px;
  margin: 0 auto;
}
.device-wrapper {
  width: 1226px;
  background: #ffffff;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
