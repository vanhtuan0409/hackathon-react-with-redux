import { State, Effect, Actions } from "jumpstate";
import productApi from "@apis/product";

export default State("products", {
  initial: {
    groups: [],
    products: [],
    loading: false
  },

  showLoading(state) {
    return Object.assign({}, state, { loading: true });
  },

  receiveData(state, { products, groups }) {
    return { groups, products, loading: false };
  }
});

// Reducer for login action
Effect("loadProductAndCategory", async (payload, getState) => {
  const state = getState();
  const { products: pState } = state;
  // Dont reload if already have data
  if (pState.groups.length > 0 && pState.products.length > 0) return;

  Actions.products.showLoading();
  const [products, groups] = await Promise.all([
    productApi.getProducts(),
    productApi.getProductGroups()
  ]);
  Actions.products.receiveData({ products, groups });
});
