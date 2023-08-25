import { SetError, SetLoading, SingleProduct } from "./actionType";

export const GetSingleProduct = (data) => {
  return {
    type: SingleProduct,
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
