import { combineReducers } from "redux";
import user from "./userReducer";
import registries from "./registriesReducer";
import allRegistries from "./registriesReducer";

export default combineReducers({
  user,
  registries,
  allRegistries,
});
