import css from "./Catalog.module.css";

import { useSelector } from "react-redux";
import { selectAllCars } from "../../redux/cars/selectors";

import Card from "../Card/Card";
import Filter from "../Filter/Filter";

const Catalog = () => {
  const cars = useSelector(selectAllCars);

  return (
    <>
      <Filter />
      <div className={css.wrapper}>
        {cars &&
          cars.map((car) => {
            return <Card key={car.id} data={car} />;
          })}
      </div>
    </>
  );
};

export default Catalog;
