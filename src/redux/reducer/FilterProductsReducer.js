import {
  FilterProduct,
  GetFilterValue,
  ProductSort,
  SortProduct,
  SortValue,
  clrAllFilter,
} from "../action/actionType";

const initialState = {
  All_products: [],
  Filter_Product: [],
  Sorting_value: "All",
  Filter: {
    SearchValue: "",
    categories: ["smartphones", "laptops"],
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

    case SortValue:
      return { ...state, Sorting_value: action.payload };
    case ProductSort:
      let NewSortData;
      const { Filter_Product, Sorting_value } = state;
      let tempSortData = [...Filter_Product];

      const SortingProducts = (a, b) => {
        switch (Sorting_value) {
          case "lowest":
            return a.price - b.price;
          case "highest":
            return b.price - a.price;
          case "a-z":
            return a.title.localeCompare(b.title);
          case "z-a":
            return b.title.localeCompare(a.title);

          default:
            return Filter_Product;
        }
      };

      NewSortData = tempSortData.sort(SortingProducts);
      return { ...state, Filter_Product: NewSortData };

    case SortProduct:
      let { All_products } = state;
      let tempFilterProduct = [...All_products];
      const { SearchValue, categories, brand } = state.Filter;
      if (SearchValue) {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.title.toLowerCase().includes(SearchValue.toLowerCase());
        });
      }
      if (categories !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.category === categories;
        });
      }
      if (brand !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.brand === brand;
        });
      }

      return {
        ...state,
        Filter_Product: tempFilterProduct,
      };

    case clrAllFilter:
      return {
        ...state,
        Filter_Product: state.All_products,
        Filter: {
          ...state.Filter,
          SearchValue: "",
          categories: "All",
          brand: "All",
        },
      };
    default:
      return state;
  }
};
