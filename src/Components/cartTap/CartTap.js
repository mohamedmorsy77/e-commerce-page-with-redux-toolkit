import React from "react";
import "./CartTap.css";
import { useDispatch, useSelector } from "react-redux";
import CartTapCard from "./CartTapCard";
import { handleCartTapShow } from "../../features/ProductSlice";
function CartTap() {
  const carts = useSelector((state) => state.products.carts);
  const showCartTap = useSelector((state) => state.products.cartsTapShow);
  const dispatch = useDispatch();
  const handleShowCartTap = () => {
    dispatch(handleCartTapShow());
  };
  return (
    <section
      className={`cart_show position-fixed ${showCartTap ? "hidden" : "show"}`}
    >
      <h2 className="p-4">Shoping Cart</h2>

      <div className="p-4">
        {carts.map((cart, index) => (
          <CartTapCard key={index + 1} cart={cart} />
        ))}
      </div>

      <div className="checkout-close   d-flex ">
        <button
          onClick={handleShowCartTap}
          className=" btn-light m-0 close w-100"
        >
          Close
        </button>
        <button className=" checkout m-0 w-100">Checkout</button>
      </div>
    </section>
  );
}

export default CartTap;
