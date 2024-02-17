import { useSelector } from "react-redux";

import css from "./Favorites.module.css";

import { selectAllFavoritesCars } from "../../redux/favorites/selectors";

import Card from "../Card/Card";

const Favorites = () => {
  const cars = useSelector(selectAllFavoritesCars);

  return (
    <>
      <div className={css.container}>
        <section className={css.sectionCatalog}>
          {cars.length &&
            cars.map((car) => {
              return <Card key={car.id} data={car} />;
            })}
        </section>
      </div>
    </>
  );
};

export default Favorites;
