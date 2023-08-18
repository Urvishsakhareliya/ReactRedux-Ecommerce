import React, { useEffect } from "react";
import MainBanner from "../component/MainBanner";
import OurTopCategories from "../component/OurTopCategories";
import OurFeaturedProduct from "../component/OurFeaturedProduct";
import DiscountBanner from "../assets/Images/discount-banner.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  Categories,
  Error,
  Loading,
  OurFeatureProduct,
} from "../redux/action/categories";
import { Link } from "react-router-dom";

export default function Home() {
  const Api = "https://api.pujakaitem.com/api/products";
  const CategoriesData = useSelector((state) => state.CategoriesReducer);
  // console.log(CategoriesData);

  const dispatch = useDispatch();

  const getProducts = async (url) => {
    dispatch(Loading());
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch(Categories(products));
      dispatch(OurFeatureProduct());
    } catch (error) {
      dispatch(Error());
    }
  };
  useEffect(() => {
    getProducts(Api);
  }, []);
  return (
    <>
      <MainBanner />
      <OurTopCategories CategoriesData={CategoriesData} />
      <OurFeaturedProduct CategoriesData={CategoriesData} />

      <Link>
        <div className="discountBanner sec-margin containerX">
          <img src={DiscountBanner} alt="" className="img-fluid" />
        </div>
      </Link>

      <h1 className="mb50">margin</h1>
    </>
  );
}
