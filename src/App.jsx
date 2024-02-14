import { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";

import { useDispatch } from "react-redux";
import { getAllCarsThunk } from "./redux/cars/operations";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));

function App() {
  const dispatch = useDispatch();

  useState(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

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
