import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

function OurTopCategories({ CategoriesData }) {
  const { isLoading, TopCategories } = CategoriesData;
  const options = {
    type: "loop",
    gap: "10px",
    drag: "free",
    // autoWidth: true,
    arrows: false,
    pagination: false,
    perPage: 10,
    breakpoints: {
      767: {
        autoWidth: true,
        perPage: 2,
      },
    },
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: false,
      rewind: false,
      speed: 2,
    },
  };

  return (
    <div className="topCategories">
      <div className="containerX">
        <h2 className="text-uppercase colorPrimary headingText position-relative d-inline-block">
          Our Top Categories
        </h2>
      </div>

      <div className="categorySlider">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Splide options={options} extensions={{ AutoScroll }}>
            {TopCategories.map((Category, index) => {
              return (
                <SplideSlide key={index}>
                  <div className="category_item">{Category}</div>
                </SplideSlide>
              );
            })}
          </Splide>
        )}
      </div>
    </div>
  );
}

export default OurTopCategories;
