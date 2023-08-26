import {
  AddToCart,
  CartTotal,
  Decrement,
  DeleteCartItem,
  Increment,
  SetLocalCart,
} from "../action/actionType";

const initialState = {
  cart: [],
  TotalCartItem: "",
  TotalAmount: "",
  ShippingFees: 5,
};
export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetLocalCart:
      return { ...state, cart: action.payload };
    case AddToCart:
      const {
        id,
        title,
        thumbnail,
        stock,
        price,
        discountPercentage,
        counter,
      } = action.payload;

      let existingProduct = state.cart.find((curEle) => {
        return curEle.id === id;
      });
      if (existingProduct) {
        let updatedProduct = state.cart.map((CurEle) => {
          if (CurEle.id === id) {
            let newCounter = CurEle.counter + counter;
            if (newCounter > stock) {
              newCounter = stock;
            }
            return { ...CurEle, counter: newCounter };
          }
        });
        return { ...state, cart: updatedProduct };
      } else {
        let cartProduct;
        cartProduct = {
          id,
          title,
          thumbnail,
          stock,
          price,
          discountPercentage,
          counter,
        };
        return { ...state, cart: [...state.cart, cartProduct] };
      }

    case Decrement:
      let updatedProductDecrement = state.cart.map((CurEle) => {
        if (CurEle.id === action.payload) {
          let decCounter = CurEle.counter - 1;
          if (decCounter <= 1) {
            decCounter = 1;
          }
          return {
            ...CurEle,
            counter: decCounter,
          };
        } else {
          return CurEle;
        }
      });
      return { ...state, cart: updatedProductDecrement };
    case Increment:
      let updatedProductIncrement = state.cart.map((CurEle) => {
        if (CurEle.id === action.payload) {
          let IncCounter = CurEle.counter + 1;
          if (IncCounter > CurEle.stock) {
            IncCounter = CurEle.stock;
          }
          return {
            ...CurEle,
            counter: IncCounter,
          };
        } else {
          return CurEle;
        }
      });
      return { ...state, cart: updatedProductIncrement };

    case CartTotal:
      let { TotalCartItem, TotalAmount } = state.cart.reduce(
        (accumulator, curElem) => {
          let { price, counter } = curElem;

          accumulator.TotalCartItem += counter;
          accumulator.TotalAmount += price * counter;

          return accumulator;
        },
        {
          TotalCartItem: 0,
          TotalAmount: 0,
        }
      );
      return {
        ...state,
        TotalCartItem,
        TotalAmount,
      };

    case DeleteCartItem:
      alert();
      let UpdateCart = state.cart.filter((CurEle) => {
        return CurEle.id !== action.payload;
      });
      return { ...state, cart: UpdateCart };

    default:
      return state;
  }
};
