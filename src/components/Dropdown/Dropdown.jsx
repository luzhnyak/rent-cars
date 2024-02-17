import { useEffect, useRef, useState } from "react";

import css from "./Dropdown.module.css";
import Icons from "../../images/icons.svg";

const ListDropdown = ({ items, onSelect, onClose }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose(false);
      }
    };

    const handleClose = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClose);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClose);
    };
  }, [onClose]);

  return (
    <div className={css.listWrapper} ref={listRef}>
      <ul className={css.list}>
        {items.map((item) => {
          return (
            <li key={item} className={css.item} onClick={() => onSelect(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Dropdown = ({ items = [], defaultSelect, onSelect }) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [selectText, setSelectText] = useState(defaultSelect);

  const handleSelect = (item) => {
    onSelect(item);
    setSelectText(item);
    setIsOpenList(false);
  };

  return (
    <div className={css.wrapper}>
      <button className={css.btn} onClick={() => setIsOpenList(!isOpenList)}>
        {selectText}
        <svg width="20" height="20" alt="dropdown">
          <use href={`${Icons}#icon-dropdown`} />
        </svg>
      </button>
      {isOpenList && (
        <ListDropdown
          items={items}
          onSelect={handleSelect}
          onClose={() => setIsOpenList(false)}
        />
      )}
    </div>
  );
};

export default Dropdown;
