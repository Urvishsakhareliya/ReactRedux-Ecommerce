import {
  FilterProduct,
  GetFilterValue,
  ProductSort,
  SortProduct,
  SortValue,
  clrAllFilter,
} from "./actionType";

export const FilterAllProduct = (data) => {
  return {
    type: FilterProduct,
    payload: data,
  };
};
export const updateValueFilter = (e) => {
  let name = e.target.name;
  let value = e.target.value;

  return {
    type: GetFilterValue,
    payload: { name, value },
  };
};

export const SortingProducts = () => {
  return {
    type: SortProduct,
  };
};
export const ClrFilter = () => {
  return {
    type: clrAllFilter,
  };
};
export const FilterSortValue = (data) => {
  return {
    type: SortValue,
    payload: data,
  };
};
export const FilterProductSort = () => {
  return {
    type: ProductSort,
  };
};
