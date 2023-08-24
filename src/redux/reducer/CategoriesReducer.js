import { TopCategories } from "../action/actionType";

const initialState = {
  TopCategories: [],
  OurFeatureProduct: [],
};
export const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TopCategories:
      let AllCategory = action.payload.map((item) => {
        return item.category;
      });
      let UniqueCategory = [...new Set(AllCategory)];
      return {
        ...state,
        TopCategories: UniqueCategory,
      };

    // case FeatureProduct:
    //   let { product } = state;
    //   let tempFilterProduct = [...product];
    //   let FindFeaturedProduct = tempFilterProduct.filter((item) => {
    //     return item.featured === true;
    //   });
    //   console.log(tempFilterProduct);
    //   return {
    //     ...state,
    //     OurFeatureProduct: FindFeaturedProduct,
    //   };

    default:
      return state;
  }
};
