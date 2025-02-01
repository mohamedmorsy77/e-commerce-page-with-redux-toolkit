import React from "react";
import Header from "../shared/header/Header";
import { Outlet } from "react-router-dom";
import CartTap from "../Components/cartTap/CartTap";

function Layout() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
      <CartTap />
    </>
  );
}

export default Layout;
