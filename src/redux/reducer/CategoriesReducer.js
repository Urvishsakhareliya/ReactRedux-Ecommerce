import {
  SetLoading,
  TopCategories,
  FeatureProduct,
} from "../action/actionType";

const initialState = {
  isError: false,
  isLoading: false,
  product: [],
  TopCategories: [],
  OurFeatureProduct: [],
};
export const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetLoading:
      return {
        ...state,
        isLoading: true,
      };

    case TopCategories:
      let AllCategory = action.payload.map((item) => {
        return item.category;
      });
      let UniqueCategory = [...new Set(AllCategory)];
      return {
        ...state,
        isLoading: false,
        product: action.payload,
        TopCategories: UniqueCategory,
      };

    case FeatureProduct:
      let { product } = state;
      let tempFilterProduct = [...product];
      let FindFeaturedProduct = tempFilterProduct.filter((item) => {
        return item.featured === true;
      });
      // console.log(FindFeaturedProduct);
      return {
        ...state,
        OurFeatureProduct: FindFeaturedProduct,
      };

    default:
      return state;
  }
};
