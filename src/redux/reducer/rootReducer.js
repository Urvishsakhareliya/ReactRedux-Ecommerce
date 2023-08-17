import { combineReducers } from "redux";
import { Mode } from "./mode";
import { CategoriesReducer } from "./CategoriesReducer";

const rootReducer = combineReducers({
  Mode,
  CategoriesReducer,
});
export default rootReducer;
