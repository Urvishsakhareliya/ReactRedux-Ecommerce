import { SingleProduct } from "../action/actionType";

const initialState = {
  isError: false,
  isLoading: false,
  SingleProducts: {},
};
export const GetSingleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SingleProduct:
      return { ...state, SingleProducts: action.payload };

    default:
      return state;
  }
};
