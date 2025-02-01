import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Components/home/Home";
import Details from "../Components/details/Details";
function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":slug" element={<Details />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
