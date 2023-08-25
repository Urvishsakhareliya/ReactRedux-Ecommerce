import { FirstAction } from "../action/actionType";

const initialState = [];
export const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case FirstAction:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
