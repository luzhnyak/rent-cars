import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

import React from "react";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
