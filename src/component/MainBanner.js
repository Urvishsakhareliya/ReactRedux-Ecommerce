import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function MainBanner() {
  return (
    <div className="main-banner">
      <div className="containerX row align-items-center">
        <div className="col-6">
          <h2 className="main-text fw-bolder">
            One-stop Shop for <br />
            Buying abd Selling
          </h2>
          <p className="description_text mt-4">
            Browse, bu, and sell everything you need convenent place. <br />
            connect with sellers and buyer worldwilde for a seamless shopping
            experirnce
          </p>
          <NavLink className="ShopNow_btn d-inline-block mt-4" to="/">
            Shop Now
            <FiShoppingCart className="ms-3" />
          </NavLink>
        </div>
        <div className="col-md-6 text-center rightImage">
          {/* <img src={mainBanner} alt="Main Banner" className="img-fluid" /> */}
          <svg
            width="408"
            height="819"
            viewBox="0 0 408 819"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M208.379 4.71649C172.639 16.0402 157.776 28.4255 82.4031 107.691C42.0625 150.509 6.32215 190.496 3.49123 196.511C-0.401282 205.004 -1.10901 210.312 1.72191 217.036C3.49123 222.344 56.2171 276.839 118.851 338.765L232.442 450.94L184.316 468.987C158.366 479.021 61.9424 506.699 57.669 506.271L57.5224 506.197C57.5224 506.237 57.5719 506.261 57.669 506.271L69.0269 511.95L126.549 494.693L187.501 476.772L237.042 456.602L277.383 496.943L317.723 536.929L324.093 577.27C327.632 599.21 330.816 618.318 330.816 619.38L344.617 708.2C346.386 720.585 349.217 739.34 350.633 749.956C353.11 768.357 354.525 770.48 380.004 794.897C394.866 808.698 407.251 819.667 407.959 818.96C409.02 817.898 389.204 712.8 385.311 699.353L369.741 621.149C369.388 621.149 345.325 501.897 315.6 356.458L261.459 92.475L275.613 64.1657L289.414 36.2104L341.078 20.9943C369.388 12.5015 395.22 4.36261 398.051 2.94714C407.251 -2.00696 224.657 -0.23761 208.379 4.71649Z"
              fill="#DFE8EC"
            />
            <path
              d="M239.071 43.9825C244.733 49.6444 244.379 52.1214 237.656 58.8449C233.409 63.0913 230.578 63.4451 225.27 60.9681C221.732 58.8449 218.547 55.3062 218.547 52.8292C218.547 47.1673 225.624 39.7362 230.932 39.7362C233.055 39.7362 236.594 41.5055 239.071 43.9825Z"
              fill="#0E0F10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
