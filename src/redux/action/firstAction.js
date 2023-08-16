import { FirstAction } from "./actionType";

export const firstAction = (data) => {
  return {
    type: FirstAction,
    payload: data,
  };
};
