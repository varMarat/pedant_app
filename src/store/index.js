import Vue from "vue";
import Vuex from "vuex";

import cardProduct from "@/store/modules/cardProduct";
import cart from "@/store/modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cardProduct,
    cart,
  },
});
