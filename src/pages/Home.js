import React, { useEffect } from "react";
import MainBanner from "../component/MainBanner";
import OurTopCategories from "../component/OurTopCategories";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Categories, Error, Loading } from "../redux/action/categories";

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
      <h1 className="mb50">margin</h1>
    </>
  );
}
