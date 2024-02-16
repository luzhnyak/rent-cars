import { lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";

import { useDispatch, useSelector } from "react-redux";
import { getAllCarsThunk } from "./redux/cars/operations";
import { selectPage } from "./redux/cars/selectors";
import { selectBrand } from "./redux/filter/selectors";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));

function App() {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);
  const make = useSelector(selectBrand);

  console.log(make);

  useEffect(() => {
    dispatch(getAllCarsThunk({ page, make }));
  }, [dispatch, page, make]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="catalog" element={<CatalogPage />}></Route>
        <Route path="favorites" element={<FavoritePage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
