import productCardsApi from "@/api/productCards";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

const getters = {
  allProducts(state) {
    return state.data;
  },
};

const mutations = {
  getProductCardsStart(state) {
    state.isLoading = true;
    state.data = null;
  },
  getProductCardsSuccess(state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  getProductCardsFailure(state) {
    state.isLoading = false;
  },
};

const actions = {
  getCardProduct(context, { apiUrl }) {
    return new Promise((resolve) => {
      context.commit("getProductCardsStart");
      productCardsApi
        .getProductCards(apiUrl)
        .then((response) => {
          context.commit("getProductCardsSuccess", response.data);
          resolve(response.data);
        })
        .catch(() => {
          context.commit("getProductCardsFailure");
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
