import { LightDarkMode } from "../action/actionType";

const initialState = ["dark"];
export const Mode = (state = initialState, action) => {
  // alert(action.payload);
  // console.log(state, action.payload);
  switch (action.type) {
    case LightDarkMode:
      return [action.payload];

    default:
      return state;
  }
};
