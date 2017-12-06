import { State } from "jumpstate";

export default State("auth", {
  initial: {
    user: null,
    modalVisibility: false
  },

  showModal(state) {
    if (state.user) return;
    return Object.assign({}, state, { modalVisibility: true });
  },

  closeModal(state) {
    if (state.user) return;
    return Object.assign({}, state, { modalVisibility: false });
  }
});
