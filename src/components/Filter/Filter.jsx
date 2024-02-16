import { useState } from "react";
import css from "./Filter.module.css";
import { filterBrandOptions } from "../../data/makes";
import { filterPriceOptions } from "../../data/price";
import Dropdown from "../Dropdown/Dropdown";

import { useDispatch } from "react-redux";
// import { setBrand, setPrice } from "../../redux/filter/slice";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [params, setParams] = useState({
    make: searchParams.get("price") ?? "",
    price: searchParams.get("price") ?? "",
    from: searchParams.get("from") ?? "",
    to: searchParams.get("to") ?? "",
  });

  for (var key in params) {
    if (!params[key]) {
      delete params[key];
    }
  }

  const dispatch = useDispatch();

  const handleSelectBrand = (item) => {
    // dispatch(setBrand(item));
    params.make = item;
    setSearchParams(params);
  };

  const handleSelectPrice = (item) => {
    // dispatch(setPrice(item));
    params.price = item;
    setSearchParams(params);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.brandWrapper}>
        <span className={css.label}>Car brand</span>
        <Dropdown
          items={filterBrandOptions}
          defaultSelect="Enter the text"
          onSelect={handleSelectBrand}
        />
      </div>
      <div className={css.priceWrapper}>
        <span className={css.label}>Price/ 1 hour</span>
        <Dropdown
          items={filterPriceOptions}
          defaultSelect="To $"
          onSelect={handleSelectPrice}
        />
      </div>
      <div className="">
        <span className={css.label}>Сar mileage / km</span>
        <div className={css.inputWrapper}>
          <label className={css.inputLabel} htmlFor="from">
            From
          </label>
          <input id="from" className={css.inputFrom} type="number" />
        </div>
        <div className={css.inputWrapper}>
          <label className={css.inputLabel} htmlFor="to">
            To
          </label>
          <input id="to" className={css.inputTo} type="number" />
        </div>
      </div>
      <button className={css.btn} type="button">
        Search
      </button>
    </div>
  );
};

export default Filter;
