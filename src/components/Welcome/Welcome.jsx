import css from "./Welcome.module.css";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <main className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h1 className={css.title}>Car Rental Company</h1>
        <p className={css.subTitle}>
          Navigate your journey, choose our rental for your comfort
        </p>
      </div>
      <NavLink className={css.btn} to="/catalog">
        Catalog
      </NavLink>
    </main>
  );
};

export default Welcome;
