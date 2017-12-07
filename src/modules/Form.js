import { State } from "jumpstate";
import setIn from "@utils/setIn";

export default State("form", {
  initial: {
    currentStep: 1,
    data: {
      customer: {
        name: "Lê Anh Quân",
        phone: "09123123123",
        email: "",
        deliver_now: true
      },
      location: {
        address: "Chung cư cao cấp Ecolife Captiol, Tố Hữu, Trung Văn",
        district: "Từ Liêm",
        city: "Hà Nội"
      },
      items: []
    }
  },

  goToNextStep(state) {
    if (state.currentStep >= 5) return state;
    return Object.assign({}, state, {
      currentStep: state.currentStep + 1
    });
  },

  goToPreviousStep(state) {
    if (state.currentStep <= 1) return state;
    return Object.assign({}, state, {
      currentStep: state.currentStep - 1
    });
  },

  setFormData(state, { name, data }) {
    const fullPath = `data.${name}`;
    return setIn(fullPath, data, state);
  },

  submit(state) {
    alert(JSON.stringify(state.data));
    return state;
  }
});
