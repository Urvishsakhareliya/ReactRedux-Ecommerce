import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiStar, BiSolidStarHalf, BiSolidStar } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import GetSingleProducts from "../helpers/GetSingleProducts";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

function ProductsDetails() {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  const SingleProData = useSelector((state) => state.GetSingleProductReducer);
  const { isError, isLoading, SingleProducts } = SingleProData;
  const {
    id,
    brand,
    description,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = SingleProducts;

  const Discount = (price, discount) => {
    const lessDiscount = discount / 100;
    return price - price * lessDiscount;
  };
  const Decrement = () => {
    counter <= 1 ? setCounter(1) : setCounter(counter - 1);
  };
  const Increment = () => {
    counter >= stock ? setCounter(stock) : setCounter(counter + 1);
  };

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <BiSolidStar className="star" />
        ) : rating >= number ? (
          <BiSolidStarHalf className="star" />
        ) : (
          <BiStar className="star" />
        )}
      </span>
    );
  });

  const { ProductId } = useParams();
  useEffect(() => {
    GetSingleProducts(dispatch, ProductId);
  }, []);
  return (
    <>
      <div className="containerX sec-margin">
        <div className="proRow align-items-center">
          <div className="leftSec">
            <div className="main_image">
              <img src={thumbnail} alt="" />
            </div>
          </div>
          <div className="RightSec">
            <h1 className="colorHeading mb-3">{title}</h1>
            <p>{description}</p>
            <p className="mt-3">
              {ratingStar} <span className=" fs-4 colorHeading">/{rating}</span>
            </p>
            <div className="d-flex mt-4 gap-5 align-items-center">
              <h3 className="price colorHeading">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumSignificantDigits: 3,
                }).format(Discount(price, discountPercentage) * 100)}
              </h3>
              <h3 className="text-decoration-line-through">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumSignificantDigits: 3,
                }).format(price * 100)}
              </h3>
            </div>

            <div className="counter d-inline-flex align-items-center mt-5">
              <button onClick={Decrement}>-</button>
              <span>{counter}</span>
              <button onClick={Increment}>+</button>
            </div>

            <div className="d-block mt-5">
              <button className="btn AddToCart">
                Add To Cart <FiShoppingCart className="ms-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsDetails;
