import { Link, NavLink } from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.menu}>
          <li className={css.menuItem}>
            <Link className={css.menuLink} to="/">
              <div className={css.logo}>
                <svg width="40" height="40">
                  <use href={"./icons.svg#icon-car"} />
                </svg>
                <span className={css.logoText}>ExpressWheels</span>
              </div>
            </Link>
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
