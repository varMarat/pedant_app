const state = {
  cartProductCard: [],
};

const getters = {
  allCartProductCard(state) {
    return state.cartProductCard;
  },
};

const mutations = {
  addToCart(state, product) {
    if (state.cartProductCard.length === 0) {
      state.cartProductCard.push(product);
    } else {
      let index = state.cartProductCard.findIndex(
        (cartProduct) => cartProduct.id === product.id
      );
      if (index != -1) {
        state.cartProductCard[index].count++;
      } else {
        state.cartProductCard.push(product);
      }
    }
  },

  removeFromCart(state, id) {
    let index = state.cartProductCard.findIndex(
      (cartProduct) => cartProduct.id === id
    );
    if (state.cartProductCard[index].count > 1) {
      state.cartProductCard[index].count--;
    } else {
      state.cartProductCard.splice(index, 1);
    }
  },
};

export default {
  state,
  getters,
  mutations,
};
