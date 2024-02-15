import React, { useState } from "react";
import css from "./Dropdown.module.css";

import dropdownIcon from "../../images/dropdown-icon.svg";
import { useDispatch } from "react-redux";
import { setBrand } from "../../redux/filter/slice";

const Dropdown = ({ items = [], defaultSelect }) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [selectText, setSelectText] = useState("Enter the text");

  const dispatch = useDispatch();

  const handleSelect = (item) => {
    setIsOpenList(false);
    dispatch(setBrand(item));
    setSelectText(item);
  };

  return (
    <div className={css.wrapper}>
      <button className={css.btn} onClick={() => setIsOpenList(!isOpenList)}>
        {selectText}
        <img src={dropdownIcon} alt="dropdown" />
      </button>
      {isOpenList && (
        <ul className={css.list}>
          {items.map((item) => {
            return (
              <li
                key={item}
                className={css.item}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
