import React, { useEffect, useState } from "react";
import FilterSection from "../component/FilterSection";
// import { Link } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { AllProducts, Error, Loading } from "../redux/action/AllProduct";

import getAllProducts from "../helpers/getApiData";
import {
  FilterAllProduct,
  updateValueFilter,
  SortingProducts,
  FilterSortValue,
  FilterProductSort,
} from "../redux/action/FilterProductsAction";
import ProductItem from "../component/ProductItem";
import { RiSearch2Line } from "react-icons/ri";

function Products() {
  // const Api = "https://dummyjson.com/products";
  const dispatch = useDispatch();
  const [isFilter, setIsFilter] = useState(false);
  const AllReducer = useSelector((state) => state);
  const { AllProductsReducer, FilterProductReducer } = AllReducer;
  const { Filter_Product, Sorting_value } = FilterProductReducer;

  const sorting = (e) => {
    let SortVal = e.target.value;
    dispatch(FilterSortValue(SortVal));
  };

  useEffect(() => {
    dispatch(SortingProducts());
    dispatch(FilterProductSort());
  }, [Sorting_value, FilterProductReducer.Filter]);

  useEffect(() => {
    getAllProducts(dispatch);
  }, []);

  useEffect(() => {
    dispatch(FilterAllProduct(AllProductsReducer.AllProduct));
  }, [AllProductsReducer]);

  useEffect(() => {
    isFilter
      ? document.querySelector("body").classList.add("overflow-hidden")
      : document.querySelector("body").classList.remove("overflow-hidden");
  }, [isFilter]);
  return (
    <>
      <div className="containerX">
        <div className="row mt-5">
          <div className="col-12 SearchSort mb-5">
            <div className="position-relative" id="searchBar">
              <input
                type="search"
                name="SearchValue"
                placeholder="Search Product"
                value={FilterProductReducer.Filter.SearchValue}
                onChange={(e) => dispatch(updateValueFilter(e))}
              />
              <RiSearch2Line className="search" />
            </div>
          </div>
          <div
            className={`col-lg-4 col-xl-3 filter_Sec ${
              isFilter ? "active" : ""
            }`}
          >
            <div
              className="mobLine d-lg-none"
              onClick={() => setIsFilter(false)}
            ></div>
            <FilterSection FilterProductReducer={FilterProductReducer} />
          </div>
          <div className="col-12 col-lg-8 col-xl-9">
            <div className="productSort mb-3 align-items-center">
              <h3 className="fs-1 colorHeading ">
                {Filter_Product.length} Products
              </h3>

              <select
                className="form-select"
                id="sort_select"
                onChange={sorting}
              >
                <option value="All">All</option>
                <option value="lowest">price(lowest)</option>
                <option value="highest">price(highest)</option>
                <option value="a-z">price(a-z)</option>
                <option value="z-a">price(z-a)</option>
              </select>
            </div>
            <ul className="ProductGroup">
              {Filter_Product.map((CurEle, index) => {
                return <ProductItem CurEle={CurEle} key={index} />;
              })}
            </ul>
          </div>
        </div>
      </div>
      <button
        className={`filterMobBtn d-lg-none ${isFilter ? "d-none" : ""}`}
        onClick={() => setIsFilter(true)}
      >
        Filter
      </button>

      <div
        className={`blackLayer ${isFilter ? "" : "d-none"}`}
        onClick={() => setIsFilter(false)}
      ></div>
    </>
  );
}

export default Products;
