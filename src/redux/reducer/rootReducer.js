import { combineReducers } from "redux";
import { Mode } from "./mode";
import { CategoriesReducer } from "./CategoriesReducer";
import { AllProductsReducer } from "./AllProductsReducer";
import { FilterProductReducer } from "./FilterProductsReducer";
import { GetSingleProductReducer } from "./GetSingleProductReducer";

const rootReducer = combineReducers({
  Mode,
  CategoriesReducer,
  AllProductsReducer,
  FilterProductReducer,
  GetSingleProductReducer,
});
export default rootReducer;
