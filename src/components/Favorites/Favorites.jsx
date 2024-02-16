import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCars, selectLoading } from "../../redux/cars/selectors";

import css from "./Favorites.module.css";

import Card from "../Card/Card";
import { selectAllFavoritesCars } from "../../redux/favorites/selectors";

const Favorites = () => {
  const cars = useSelector(selectAllFavoritesCars);

  return (
    <>
      <div className={css.wrapper}>
        {cars.length &&
          cars.map((car) => {
            return <Card key={car.id} data={car} />;
          })}
      </div>
    </>
  );
};

export default Favorites;
