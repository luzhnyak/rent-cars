import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCarsThunk } from "../redux/cars/operations";
import { selectPage } from "../redux/cars/selectors";

import Catalog from "../components/Catalog/Catalog";
import { useSearchParams } from "react-router-dom";
import { resetCars } from "../redux/cars/slice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [searchParams, _] = useSearchParams();

  const page = useSelector(selectPage);
  const make = searchParams.get("make") ?? "";

  useEffect(() => {
    dispatch(getAllCarsThunk({ page, make }));
    return () => dispatch(resetCars());
  }, [dispatch, page, make]);

  return (
    <main>
      <Catalog />
    </main>
  );
};

export default CatalogPage;
