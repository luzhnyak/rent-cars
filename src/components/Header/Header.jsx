import React from "react";
import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.menu}>
          <li className={css.menuItem}>
            <NavLink className={css.menuLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.menuLink} to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink className={css.menuLink} to="/favorites">
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
