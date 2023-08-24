import React, { useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import "bootstrap/dist/js/bootstrap.bundle";
import { useDispatch, useSelector } from "react-redux";
import {
  SortingProducts,
  updateValueFilter,
} from "../redux/action/FilterProductsAction";

function FilterSection({ FilterProductReducer }) {
  const dispatch = useDispatch();

  const {
    All_products,
    Filter_Product,
    Sorting_value,
    Filter: { SearchValue, categories, brand, maxPrice, price, minPrice },
  } = FilterProductReducer;
  // console.log(categories);
  const getUniqueData = (data, property) => {
    let newVal = data.map((item) => {
      return item[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  useEffect(() => {
    dispatch(SortingProducts());
  }, [categories, brand]);

  const categoriesData = getUniqueData(All_products, "category");
  const brands = getUniqueData(All_products, "brand");

  return (
    <>
      <h3 className="fs-1 colorHeading">Filters</h3>

      <div className="accordion Filter_Acc" id="FilterSec">
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className="accordion-button fs-3 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#categoriesFilter"
              aria-expanded="true"
              aria-controls="categoriesFilter"
            >
              Category
              <IoChevronDownOutline className="arrow" />
            </button>
          </h6>
          <div
            id="categoriesFilter"
            className="accordion-collapse collapse show"
            data-bs-parent="#FilterSec"
          >
            <ul className="accordion-body">
              {categoriesData.map((item, key) => {
                return (
                  <li className="filter_Item form-check" key={key}>
                    <input
                      className="form-check-input"
                      type="radio"
                      value={item}
                      id={item}
                      name="categories"
                      defaultChecked={item === "All"}
                      onClick={(e) => dispatch(updateValueFilter(e))}
                    />
                    <label className="form-check-label" htmlFor={item}>
                      {item}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="accordion-item mt-4">
          <h6 className="accordion-header">
            <button
              className="accordion-button collapsed fs-3 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#BrandFilter"
              aria-expanded="true"
              aria-controls="BrandFilter"
            >
              Brands
              <IoChevronDownOutline className="arrow" />
            </button>
          </h6>
          <div
            id="BrandFilter"
            className="accordion-collapse collapse"
            data-bs-parent="#FilterSec"
          >
            <ul className="accordion-body">
              {brands.map((item, key) => {
                return (
                  <li className="filter_Item form-check" key={key}>
                    <input
                      className="form-check-input"
                      type="radio"
                      value={item}
                      id={item}
                      name="brand"
                      defaultChecked={item === "All"}
                      onClick={(e) => dispatch(updateValueFilter(e))}
                    />
                    <label className="form-check-label" htmlFor={item}>
                      {item}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSection;
