import React, { useEffect, useState } from "react";
import { products } from "../../data/Data";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../features/ProductSlice";

function CartTapCard({ cart, index }) {
  const { productId, quantity } = cart;
  const [productDetails, setProductDetails] = useState([]);
  const dispatch = useDispatch();

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  useEffect(() => {
    const matchProductDetails = products.find(
      (product) => product.id === productId
    );
    setProductDetails(matchProductDetails);
  }, [productId]);
  return (
    <div
      key={index}
      className="cart-details rounded-2 p-2 mt-3  d-flex align-items-center gap-2"
    >
      <div className="image">
        <img
          className="img-fluid"
          src={productDetails.image}
          alt="productDetails-image"
        />
      </div>
      <div className="product_name ">{productDetails.name}</div>
      <div className="totalPrice">${productDetails.price * quantity}</div>
      <div className="quantity d-flex align-items-center gap-2">
        <span
          onClick={handleMinusQuantity}
          className="minus rounded-circle d-flex justify-content-center align-items-center"
        >
          {"<"}
        </span>
        <span className="rounded-circle d-flex justify-content-center align-items-center">
          {quantity}
        </span>
        <span
          className="plus rounded-circle d-flex justify-content-center align-items-center"
          onClick={handlePlusQuantity}
        >
          {">"}
        </span>
      </div>
    </div>
  );
}

export default CartTapCard;
