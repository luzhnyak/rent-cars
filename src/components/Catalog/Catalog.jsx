import css from "./Catalog.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCars,
  selectLoading,
  selectPage,
} from "../../redux/cars/selectors";

import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import { useEffect, useState } from "react";
import { incPage } from "../../redux/cars/slice";
import Loader from "../Loader/Loader";
import { useSearchParams } from "react-router-dom";

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const make = searchParams.get("make");
  const price = searchParams.get("price");
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  const cars = useSelector(selectAllCars);
  const isLoading = useSelector(selectLoading);
  const page = useSelector(selectPage);

  const [filteredCars, setFilteredCars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let tempCars = [...cars];

    if (price) tempCars = tempCars.filter((car) => car.rentalPrice <= price);

    if (from && to)
      tempCars = tempCars.filter(
        (car) => car.mileage >= from && car.mileage <= to
      );

    setFilteredCars(tempCars);
  }, [cars, price, from, to]);

  const handleLoadMore = () => {
    dispatch(incPage());
  };

  return (
    <>
      <div className={css.container}>
        <Filter />
        <section className={css.sectionCatalog}>
          {filteredCars &&
            filteredCars.map((car) => {
              return <Card key={car.id} data={car} />;
            })}
        </section>
        {page < 3 && !make && (
          <button className={css.btn} type="button" onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default Catalog;
