<template>
  <div class="device" @click="addToCart">
    <div class="device__main-img-wrapper">
      <img :src="product.images[0].path" class="device__main-img" alt="" />
    </div>
    <div class="device__cost-our-discount">
      <div class="device__cost-our-discount__text">-30%</div>
    </div>
    <div class="device__title">{{ product.name }}</div>
    <div class="device__reviews">
      <div class="device__stars">
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
      </div>
      <div class="device__reviews-count">
        <div class="device__reviews-count-text">
          ({{ product.reviews_count }})
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="device__cost-wrapper">
      <div class="device__cost-others-wrapper">
        <div class="device__cost-others-title">Цена у других</div>
        <div class="device__cost-others-cost">
          {{ product.other_seller_price }}
        </div>
      </div>
      <div class="device__cost-our-wrapper">
        <div class="device__cost-our-title">Цена у нас</div>
        <div class="device__cost-our-cost">от {{ product.price }}</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="device__sales-wrapper">
      <div class="device__sales-count">Продано всего: {{ totalSold }}</div>
      <div class="device__sales-last">
        <div class="device__sales-last-img">
          <img src="@/assets/calendar.svg" alt="" />
        </div>
        <div class="device__sales-last-desc">
          Крайняя покупка: {{ product.statistics.last_sale_at }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CardProduct",
  props: ["product", "id"],
  computed: {
    ...mapGetters(["allProducts"]),
    totalSold() {
      return (
        this.product.statistics.purchased_quantity -
        this.product.available_quantity
      );
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", {
        name: this.product.name,
        price: this.product.price,
        img: this.product.images[0].path,
        id: this.id,
        count: 1,
      });
    },
  },
};
</script>
<style>
.device {
  width: 289px;
  height: 350px;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  position: relative;
  cursor: pointer;
}
.device__main-img-wrapper {
  width: 126px;
  height: 128px;
  margin: 15px auto;
}
.device__main-img {
  max-width: 100%;
}
.device__cost-our-discount {
  position: absolute;
  width: 52px;
  height: 24px;
  background: #d31010;
  border-radius: 5px;
  right: 15px;
  top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.device__cost-our-discount__text {
  width: 32px;
  height: 17px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
.device__title {
  width: 247px;
  height: 13px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  margin-left: 21px;
}
.device__reviews {
  display: flex;
  align-items: center;
  margin-top: 50px;
  height: 17px;
  margin-left: 21px;
}
.device__stars {
  width: 68px;
  font-family: Font Awesome 5 Free;
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  color: #ffcf55;
  display: flex;
  align-items: center;
}
.device__reviews-count {
  display: flex;
  align-items: center;
}
.device__reviews-count-text {
  width: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
}
.line {
  border-bottom: 1px solid #efefef;
  margin-top: 12px;
}

.device__cost-wrapper {
  margin-top: 11px;
  margin-left: 21px;
  display: flex;
  justify-content: space-between;
}

.device__cost-others-wrapper {
}
.device__cost-others-title {
  width: 78px;
  height: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
}
.device__cost-others-cost {
  width: 82px;
  height: 18px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #6b6b6b;
}

.device__cost-our-wrapper {
}
.device__cost-our-title {
  width: 60px;
  height: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
}
.device__cost-our-cost {
  width: 124px;
  height: 31px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #242424;
}

.device__sales-wrapper {
  margin: 4px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.device__sales-count {
  height: 12px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #000000;
}
.device__sales-last {
  display: flex;
  align-items: center;
}
.device__sales-last-img {
  margin-right: 5px;
}
.device__sales-last-desc {
  height: 12px;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #343434;
}
</style>
