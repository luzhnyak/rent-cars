import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";

import CatalogPage from "./pages/CatalogPage";
import FavoritePage from "./pages/FavoritePage";
import HomePage from "./pages/HomePage";

function App() {
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
