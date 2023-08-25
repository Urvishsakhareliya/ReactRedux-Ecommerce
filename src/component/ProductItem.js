import React from "react";
import { Link, NavLink } from "react-router-dom";

function ProductItem({ CurEle }) {
  const { id, title, thumbnail, price, rating, discountPercentage } = CurEle;

  const Discount = (price, discount) => {
    const lessDiscount = discount / 100;
    return price - price * lessDiscount;
  };

  return (
    <>
      <li className="ProductItem" id={id}>
        <NavLink to={`/ProductDetails/${id}`}>
          <div className="imageBx">
            <img src={thumbnail} alt="" className="img-fluid" />
          </div>
          <div className="description">
            <p className="line_1 colorHeading fs-3">{title}</p>
            <div className="namePrice mt-2">
              <p className="colorHeading fs-1 price">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumSignificantDigits: 3,
                }).format(Discount(price, discountPercentage) * 100)}
                /-
              </p>
              <p className="fs-3 text-decoration-line-through">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumSignificantDigits: 3,
                }).format(price * 100)}
              </p>
            </div>
          </div>
        </NavLink>
      </li>
    </>
  );
}

export default ProductItem;
