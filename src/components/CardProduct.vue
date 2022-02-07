<template>
  <div class="device" @click="addToCart">
    <img class="divice__img" :src="product.images[0].path" alt="" />
    <div class="device__cost-our-discount">-30%</div>
    <div class="device__title">{{ product.name }}</div>
    <div class="device__reviews">
      <div class="device__stars">
        <font-awesome-icon class="device__stars-icon" :icon="['fas', 'star']" />
        <font-awesome-icon class="device__stars-icon" :icon="['fas', 'star']" />
        <font-awesome-icon class="device__stars-icon" :icon="['fas', 'star']" />
        <font-awesome-icon class="device__stars-icon" :icon="['fas', 'star']" />
        <font-awesome-icon
          class="device__stars-icon"
          :icon="['fas', 'star-half']"
        />
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
          {{ product.other_seller_price }} руб
        </div>
      </div>
      <div class="device__cost-our-wrapper">
        <div class="device__cost-our-title">Цена у нас</div>
        <div class="device__cost-our-cost">от {{ product.price }} руб</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="device__sales-wrapper">
      <div class="device__sales-count">Продано всего: {{ totalSold }}</div>
      <div class="device__sales-last">
        <div class="device__sales-last-icon">
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
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 100px;
  position: relative;
  cursor: pointer;
}
.divice__img {
  display: block;
  max-height: 128px;
  margin: 0 auto;
  margin-top: 15px;
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
  line-height: 17px;
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
}
.device__title {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #242424;
  margin-top: 12px;
  margin-left: 20px;
}
.device__stars-icon {
  color: #ffcf55;
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
}
.device__reviews {
  display: flex;
  align-items: center;
  margin-top: 37px;
  margin-left: 20px;
  margin-bottom: 12px;
}
.device__stars {
}
.device__reviews-count-text {
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
}
.line {
  border-bottom: 1px solid #efefef;
  margin-left: 7px;
}
.device__cost-wrapper {
  margin-top: 11px;
  margin-left: 20px;
  margin-right: 12px;
  margin-bottom: 27px;
  display: flex;
  justify-content: space-between;
}
.device__cost-others-wrapper {
}
.device__cost-others-title {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
}
.device__cost-others-cost {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #6b6b6b;
}
.device__cost-our-wrapper {
}
.device__cost-our-title {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
}
.device__cost-our-cost {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #242424;
}
.device__sales-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9px;
  margin-left: 12px;
  margin-right: 12px;
}
.device__sales-count {
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #000000;
}
.device__sales-last {
  display: flex;
  align-items: center;
}
.device__sales-last-icon {
  margin-right: 7px;
}
.device__sales-last-desc {
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #343434;
}
</style>
