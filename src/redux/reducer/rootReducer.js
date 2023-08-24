import { combineReducers } from "redux";
import { Mode } from "./mode";
import { CategoriesReducer } from "./CategoriesReducer";
import { AllProductsReducer } from "./AllProductsReducer";
import { FilterProductReducer } from "./FilterProductsReducer";

const rootReducer = combineReducers({
  Mode,
  CategoriesReducer,
  AllProductsReducer,
  FilterProductReducer,
});
export default rootReducer;
