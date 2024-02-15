import React from "react";
import css from "./Filter.module.css";
import { filterBrandOptions } from "../../data/makes";
import { filterPriceOptions } from "../../data/price";
import Dropdown from "../Dropdown/Dropdown";

const Filter = () => {
  return (
    <div className={css.wrapper}>
      <div className="">
        <label className={css.label}>Car brand</label>
        <Dropdown items={filterBrandOptions} defaultSelect="Enter the text" />
      </div>
      <div className="">
        <label className={css.label}>Car brand</label>
        <select className={css.select} name="select" value="Enter the text">
          {filterBrandOptions.map((brand) => {
            return (
              <option className={css.option} key={brand} value={brand}>
                {brand}
              </option>
            );
          })}
        </select>
      </div>
      {/* <div className="">
        <label className={css.label}>Price/ 1 hour</label>
        <select className={css.select} name="select" value="To $">
          {filterPriceOptions.map((price) => {
            return (
              <option className={css.option} key={price} value={price}>
                {price}
              </option>
            );
          })}
        </select>
      </div>
      <div className="">
        <label className={css.label}>Сar mileage / km</label>
        <input className={css.inputFrom} type="text" placeholder="From" />
        <input className={css.inputTo} type="text" placeholder="To" />
      </div>

      <button className={css.btn} type="button">
        Search
      </button> */}
    </div>
  );
};

export default Filter;
