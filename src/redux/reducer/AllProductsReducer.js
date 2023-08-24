import { GetProducts, SetLoading, SetError } from "../action/actionType";

const initialState = {
  isError: false,
  isLoading: false,
  AllProduct: [],
};
export const AllProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetLoading:
      return {
        ...state,
        isLoading: true,
      };
    case GetProducts:
      return {
        ...state,
        AllProduct: action.payload,
      };
    case SetError:
      return {
        ...state,
        isError: true,
        isLoading: true,
      };
    default:
      return state;
  }
};
