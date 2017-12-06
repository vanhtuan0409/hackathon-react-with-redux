import { State, Effect, Actions } from "jumpstate";
import authApi from "@apis/auth";

export default State("auth", {
  initial: {
    user: null,
    modalVisibility: false
  },

  // Reducer for setUser action
  setUser(state, user) {
    return Object.assign({}, state, { user });
  },

  // Reducer for showModal action
  showModal(state) {
    if (state.user) return;
    return Object.assign({}, state, { modalVisibility: true });
  },

  // Reducer for closeModal action
  closeModal(state) {
    if (state.user) return;
    return Object.assign({}, state, { modalVisibility: false });
  }
});

// Reducer for login action
Effect("login", async () => {
  const user = await authApi.doLogin();
  Actions.auth.setUser(user);
});
