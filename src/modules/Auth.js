import { State, Effect, Actions } from "jumpstate";
import authApi from "@apis/auth";

export default State("auth", {
  initial: {
    user: null,
    modalVisibility: false
  },

  setUser(state, user) {
    return Object.assign({}, state, { user });
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

Effect("login", async () => {
  const user = await authApi.doLogin();
  Actions.auth.setUser(user);
});
