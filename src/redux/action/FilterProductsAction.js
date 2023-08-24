import { useEffect } from "react";
import { Fake, FilterProduct, GetFilterValue, SortProduct } from "./actionType";

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
