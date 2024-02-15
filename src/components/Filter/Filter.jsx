import React from "react";
import css from "./Filter.module.css";
import { filterBrandOptions } from "../../data/makes";
import { filterPriceOptions } from "../../data/price";
import Dropdown from "../Dropdown/Dropdown";

import { useDispatch } from "react-redux";
import { setBrand, setPrice } from "../../redux/filter/slice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleSelectBrand = (item) => {
    dispatch(setBrand(item));
  };

  const handleSelectPrice = (item) => {
    dispatch(setPrice(item));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.brandWrapper}>
        <label className={css.label}>Car brand</label>
        <Dropdown
          items={filterBrandOptions}
          defaultSelect="Enter the text"
          onSelect={handleSelectBrand}
        />
      </div>
      <div className={css.priceWrapper}>
        <label className={css.label}>Price/ 1 hour</label>
        <Dropdown
          items={filterPriceOptions}
          defaultSelect="To $"
          onSelect={handleSelectPrice}
        />
      </div>
      <div className="">
        <label className={css.label}>Сar mileage / km</label>
        <input className={css.inputFrom} type="text" placeholder="From" />
        <input className={css.inputTo} type="text" placeholder="To" />
      </div>
      <button className={css.btn} type="button">
        Search
      </button>
    </div>
  );
};

export default Filter;
