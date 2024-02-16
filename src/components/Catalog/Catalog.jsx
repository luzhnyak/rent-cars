import css from "./Catalog.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectAllCars, selectLoading } from "../../redux/cars/selectors";

import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import { useEffect, useState } from "react";
import { incPage } from "../../redux/cars/slice";
import Loader from "../Loader/Loader";

const Catalog = () => {
  const cars = useSelector(selectAllCars);
  const isLoading = useSelector(selectLoading);

  const [filteredCars, setFilteredCars] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredCars([...cars]);
  }, [cars]);

  const handleLoadMore = () => {
    dispatch(incPage());
  };

  return (
    <>
      <Filter />
      <div className={css.wrapper}>
        {filteredCars &&
          filteredCars.map((car) => {
            return <Card key={car.id} data={car} />;
          })}
      </div>
      <button className={css.btn} type="button" onClick={handleLoadMore}>
        Load more
      </button>
      {isLoading && <Loader />}
    </>
  );
};

export default Catalog;