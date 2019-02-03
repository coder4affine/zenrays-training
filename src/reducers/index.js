import { combineReducers } from "redux";
import locale from "./localeReducer";
import todos from "./todoReducer";

export default combineReducers({
  locale,
  todos
});
