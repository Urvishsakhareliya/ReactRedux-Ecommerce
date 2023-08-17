import { SetLoading, TopCategories } from "../action/actionType";

const initialState = {
  isError: false,
  isLoading: false,
  product: [],
  TopCategories: [],
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

    default:
      return state;
  }
};
