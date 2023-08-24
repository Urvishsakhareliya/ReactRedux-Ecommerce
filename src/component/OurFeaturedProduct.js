import React from "react";
import { Link } from "react-router-dom";

function OurFeaturedProduct({ CategoriesData }) {
  const { OurFeatureProduct, TopCategories } = CategoriesData;
  // console.log(OurFeatureProduct, TopCategories);

  return (
    <div className="OurFeaturedProduct sec-margin">
      <div className="containerX">
        <h2 className="text-uppercase headingText colorHeading   position-relative d-inline-block">
          Our Feature Products
        </h2>

        <ul className="featureCard_Ul d-flex d-md-grid  ">
          {OurFeatureProduct.map((item) => {
            return (
              <li className="card-item position-relative">
                <img src={item.image} className="card-img-top" alt="..." />
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default OurFeaturedProduct;
