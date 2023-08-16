import { FirstAction } from "../action/actionType";

const initialState = [];
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case FirstAction:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
