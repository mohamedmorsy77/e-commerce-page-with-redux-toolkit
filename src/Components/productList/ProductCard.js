import React from "react";
import iconCart from "../../assets/images/iconCart.png";
import { useDispatch } from "react-redux";
import { addToCard } from "../../features/ProductSlice";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCarts = () => {
    dispatch(addToCard({ productId: product.id, quantity: 1 }));
  };
  return (
    <div key={product.id} className="col-12 col-md-6 col-lg-4 mt-4">
      <div className="item rounded-2 text-center p-2">
        <Link to={product.slug}>
          {" "}
          <img
            className="img-fluid w-50"
            src={product.image}
            alt="product.image"
          />
        </Link>

        <h2 className="mb-3 mt-2 fw-medium">{product.name}</h2>
        <div className="price mb-2">${product.price}</div>
        <button
          onClick={handleCarts}
          className="addCart d-flex align-items-center gap-2 btn rounded-5 px-3 py-2 my-3"
        >
          <img className="img-fluid" src={iconCart} alt="icon-cart" />
          Add to card
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
