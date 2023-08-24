import {
  FilterProduct,
  GetFilterValue,
  SortProduct,
} from "../action/actionType";

const initialState = {
  All_products: [],
  Filter_Product: [],
  Sorting_value: [],
  Filter: {
    SearchValue: "",
    categories: "All",
    brand: "All",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};
export const FilterProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FilterProduct:
      return {
        ...state,
        All_products: action.payload,
        Filter_Product: action.payload,
      };
    case GetFilterValue:
      const { name, value } = action.payload;
      return {
        ...state,
        Filter: {
          ...state.Filter,
          [name]: value,
        },
      };

    case SortProduct:
      let { All_products } = state;
      let tempFilterProduct = [...All_products];
      const { SearchValue, categories, brand } = state.Filter;
      if (categories !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.category === categories;
        });
      }
      if (brand !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          console.log(brand);
          return curEle.brand === brand;
        });
      }

      return {
        ...state,
        Filter_Product: tempFilterProduct,
      };

    default:
      return state;
  }
};
