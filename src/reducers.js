import { combineReducers } from "redux";
import authReducer from "@modules/Auth";
import formReducer from "@modules/Form";

export default combineReducers({
  auth: authReducer,
  form: formReducer
});
