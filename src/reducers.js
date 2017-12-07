import { combineReducers } from "redux";
import authReducer from "@modules/Auth";
import formReducer from "@modules/Form";
import productReducer from "@modules/Products";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  products: productReducer
});
