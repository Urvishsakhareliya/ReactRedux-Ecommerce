import { LightDarkMode } from "./actionType";

const Mode = (data) => {
  return {
    type: LightDarkMode,
    payload: data,
  };
};
export default Mode;
