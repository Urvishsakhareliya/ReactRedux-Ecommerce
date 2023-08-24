import { GetProducts, SetError, SetLoading } from "./actionType";

export const AllProducts = (data) => {
  return {
    type: GetProducts,
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
