import React, { useEffect } from "react";
import FilterSection from "../component/FilterSection";
// import { Link } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { AllProducts, Error, Loading } from "../redux/action/AllProduct";

import getAllProducts from "../helpers/getApiData";
import { FilterAllProduct } from "../redux/action/FilterProductsAction";
import ProductItem from "../component/ProductItem";
import { useState } from "react";

function Products() {
  // const Api = "https://dummyjson.com/products";
  const [isFilter, setIsFilter] = useState(false);
  const AllReducer = useSelector((state) => state);
  const { AllProductsReducer, FilterProductReducer } = AllReducer;
  const { Filter_Product } = FilterProductReducer;
  // console.log(Filter_Product);

  const dispatch = useDispatch();
  useEffect(() => {
    getAllProducts(dispatch);
  }, []);

  // useEffect(() => {
  //   dispatch(FilterAllProduct(AllProductsReducer.AllProduct));
  // }, [AllProductsReducer]);
  return (
    <>
      <div className="containerX">
        <div className="row mt-5">
          <div className="col-lg-4 col-xl-3 d-none d-lg-block filter_Sec">
            <FilterSection FilterProductReducer={FilterProductReducer} />
          </div>
          <div className="col-12 col-lg-8 col-xl-9">
            <ul className="ProductGroup">
              {Filter_Product.map((CurEle, index) => {
                return <ProductItem CurEle={CurEle} key={index} />;
              })}
            </ul>
          </div>
        </div>
      </div>
      <button
        className={`filterMobBtn ${isFilter ? "d-none" : ""}`}
        onClick={() => setIsFilter(true)}
      >
        Filter
      </button>
    </>
  );
}

export default Products;
