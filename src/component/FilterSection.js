import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import "bootstrap/dist/js/bootstrap.bundle";
import { useDispatch } from "react-redux";
import {
  updateValueFilter,
  ClrFilter,
} from "../redux/action/FilterProductsAction";

function FilterSection({ FilterProductReducer }) {
  const dispatch = useDispatch();

  const {
    All_products,
    Filter: { categories, brand, categoriesC },
  } = FilterProductReducer;

  const getUniqueData = (data, property) => {
    let newVal = data.map((item) => {
      return item[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoriesData = getUniqueData(All_products, "category");
  const brands = getUniqueData(All_products, "brand");

  // console.log(FilterProductReducer.Filter_Product);
  return (
    <>
      <section className="FilterWrapper">
        <h3 className="fs-1 colorHeading mb-3">Filters</h3>

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
                        className={`form-check-input ${
                          item === categories ? "true" : ""
                        }`}
                        type="radio"
                        value={item}
                        id={item}
                        name="categories"
                        defaultChecked={item === categories}
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
                        defaultChecked={item === brand}
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

        <div className="text-center mt-4">
          <button
            className="btn clrFilter_btn"
            onClick={() => dispatch(ClrFilter())}
          >
            Clear Filter
          </button>
        </div>
      </section>
    </>
  );
}

export default FilterSection;
