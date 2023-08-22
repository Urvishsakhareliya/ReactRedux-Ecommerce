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
import { Link, NavLink } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";

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

      {/* Talk to us */}

      <section className="containerX text-center TalkToUs sec-margin">
        <h2 className="colorHeading">Talk To Us!!</h2>
        <NavLink className="makeInquiry mt-4 d-inline-block">
          Make an Inquiry
        </NavLink>
      </section>

      <footer className="sec-margin FooterSec">
        <div className="containerX">
          <h2 className="colorPrimary text-center fw-bolder">TORDO</h2>
          <div className="socialLink colorPrimary text-center mt-4">
            <p className="socialTEXT">Social links</p>
            <div className="d-flex align-items-center justify-content-center gap-3 fs-1">
              <Link>
                <BsFacebook />
              </Link>
              <Link>
                <RiInstagramFill />
              </Link>
              <Link>
                <SiYoutubemusic />
              </Link>
              <Link>
                <TfiLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* <h1 className="mb50">margin</h1> */}
    </>
  );
}
