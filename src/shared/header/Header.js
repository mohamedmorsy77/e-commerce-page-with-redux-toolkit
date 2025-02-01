import React, { useEffect, useState } from "react";
import iconCart from "../../assets/images/iconCart.png";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { handleCartTapShow } from "../../features/ProductSlice";
function Header() {
  const carts = useSelector((state) => state.products.carts);
  const [quantity, setQuantity] = useState();
 

  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach((cart) => {
      total += cart.quantity;
    });
    setQuantity(total);
  }, [carts]);

  const handleShowCartTap = () => {
    dispatch(handleCartTapShow())
  }
  return (
    <header className="header p-3">
      <nav className="container d-flex justify-content-between align-items-center">
        <h1 className="logo fs-5">Home</h1>
        <div className="icon_cart position-relative" onClick={handleShowCartTap}>
          <img src={iconCart} alt="icon-cart" />
          <span>{quantity}</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
