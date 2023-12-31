import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  AllItemTotal,
  CartDecrement,
  CartIncrement,
  DeleteProduct,
  LocalStorageData,
  getLocalCart,
} from "../redux/action/CartAction";
import { useEffect } from "react";

export default function Cart() {
  const dispatch = useDispatch();
  const CartReducer = useSelector((state) => state.CartReducer);
  const { cart, TotalCartItem, TotalAmount, ShippingFees } = CartReducer;
  // console.log(cart);
  useEffect(() => {
    dispatch(AllItemTotal());
    localStorage.setItem("LocalCartData", JSON.stringify(cart));
    // console.log(getLocalCart());
  }, [cart]);

  useEffect(() => {
    dispatch(LocalStorageData(1));
  }, []);

  const Discount = (price, discount) => {
    const lessDiscount = discount / 100;
    return price - price * lessDiscount;
  };
  return (
    <>
      <div className="containerX sec-margin CartItemComponent">
        <h1>Cart</h1>

        <div className="cartProductGroup mt-5">
          {cart.map((CurEle, index) => {
            const {
              id,
              title,
              thumbnail,
              stock,
              price,
              discountPercentage,
              counter,
            } = CurEle;
            return (
              <div className="proUl" key={index}>
                <div className="item">
                  <div className="imgBox">
                    <img src={thumbnail} alt="" />
                  </div>
                </div>
                <div className="wrapper">
                  <div className="Item ">
                    <div className="Fields">
                      <p>Product Name :</p>
                      <p>{title}</p>
                    </div>
                    <div className="Fields">
                      <p>Price :</p>
                      <p>
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                          maximumSignificantDigits: 3,
                        }).format(Discount(price, discountPercentage) * 100)}
                      </p>
                    </div>
                    <div className="Fields">
                      <p>Discounts :</p>
                      <p className="text-decoration-line-through">
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                          maximumSignificantDigits: 2,
                        }).format(((price * discountPercentage) / 100) * 100)}
                      </p>
                    </div>
                    <div className="Fields">
                      <p>Subtotal :</p>
                      <p>
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                          maximumSignificantDigits: 3,
                        }).format(
                          Discount(price, discountPercentage) * 100 * counter
                        )}
                      </p>
                    </div>
                    <div className="Fields">
                      <p>Items :</p>
                      <p className="text-decoration-line-through">
                        <span className="counter d-inline-flex align-items-center">
                          <button onClick={() => dispatch(CartDecrement(id))}>
                            -
                          </button>
                          <span>{counter}</span>
                          <button onClick={() => dispatch(CartIncrement(id))}>
                            +
                          </button>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="Item deleteBtnItem">
                    <button
                      className="btn deleteBtn m-auto"
                      onClick={() => dispatch(DeleteProduct(id))}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <hr />

        <div className="checkoutDetails row justify-content-center">
          <div className="col-12  ">
            <ul className="BillUl  ">
              <li className="item">
                <p>SubTotal :</p>
                <p>
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumSignificantDigits: 3,
                  }).format(TotalAmount * 100)}
                </p>
              </li>
              <li className="item">
                <p>Shipping Charge :</p>
                <p>
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumSignificantDigits: 3,
                  }).format(ShippingFees * 100)}
                </p>
              </li>
              <li className="item grandTotal mt-4">
                <p>Grand Total :</p>
                <p>
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumSignificantDigits: 3,
                  }).format(TotalAmount * 100 + ShippingFees * 100)}
                </p>
              </li>
            </ul>
            <div className="d-grid d-sm-flex justify-content-sm-between mt-5 gap-3">
              <button className="btn checkoutBtn">Proceed To Checkout</button>
              <button className="btn checkoutBtn">Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
