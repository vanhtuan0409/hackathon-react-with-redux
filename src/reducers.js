import { combineReducers } from "redux";
import authReducer from "@modules/Auth";

export default combineReducers({
  auth: authReducer
});
