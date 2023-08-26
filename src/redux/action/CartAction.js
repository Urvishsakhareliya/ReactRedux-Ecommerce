import {
  AddToCart,
  CartTotal,
  Decrement,
  DeleteCartItem,
  Increment,
  SetLocalCart,
} from "./actionType";

export const CartAction = (data) => {
  return {
    type: AddToCart,
    payload: data,
  };
};
export const CartDecrement = (id) => {
  return {
    type: Decrement,
    payload: id,
  };
};
export const CartIncrement = (id) => {
  return {
    type: Increment,
    payload: id,
  };
};
export const AllItemTotal = () => {
  return {
    type: CartTotal,
  };
};
export const DeleteProduct = (id) => {
  return {
    type: DeleteCartItem,
    payload: id,
  };
};
export const LocalStorageData = (data) => {
  return {
    type: SetLocalCart,
    payload: data,
  };
};
