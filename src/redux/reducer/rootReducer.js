import { combineReducers } from "redux";
import { Mode } from "./mode";
import { CategoriesReducer } from "./CategoriesReducer";
import { AllProductsReducer } from "./AllProductsReducer";
import { FilterProductReducer } from "./FilterProductsReducer";
import { GetSingleProductReducer } from "./GetSingleProductReducer";
import { CartReducer } from "./CartReducer";

const rootReducer = combineReducers({
  Mode,
  CategoriesReducer,
  AllProductsReducer,
  FilterProductReducer,
  GetSingleProductReducer,
  CartReducer,
});
export default rootReducer;
