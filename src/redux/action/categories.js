import {
  FeatureProduct,
  SetError,
  SetLoading,
  TopCategories,
} from "./actionType";

export const Categories = (data) => {
  return {
    type: TopCategories,
    payload: data,
  };
};
export const Loading = () => {
  return {
    type: SetLoading,
  };
};
export const Error = () => {
  return {
    type: SetError,
  };
};
export const OurFeatureProduct = () => {
  return {
    type: FeatureProduct,
  };
};
