import { State, Effect, Actions } from "jumpstate";
// import authApi from "@apis/auth";

export default State("form", {
  initial: {
    currentStep: 1
  },

  // Reducer for setUser action
  goToNextStep(state) {
    if (state.currentStep >= 4) return state;
    return Object.assign({}, state, { currentStep: state.currentStep + 1 });
  },

  goToPreviousStep(state) {
    if (state.currentStep <= 1) return state;
    return Object.assign({}, state, { currentStep: state.currentStep - 1 });
  }
});

// Reducer for login action
// Effect("login", async () => {
//   const user = await authApi.doLogin();
//   Actions.auth.setUser(user);
// });
