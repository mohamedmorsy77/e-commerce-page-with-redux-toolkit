import React, { useEffect, useState } from "react";
import "./Details.css";
import { products } from "../../data/Data";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCard } from "../../features/ProductSlice";
function Details() {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [details, setDetails] = useState([]);
  const dispatch = useDispatch();

  const handleMinusProductQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusProductQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addProductToCart = () => {
    dispatch(
      addToCard({
        productId: details.id,
        quantity: quantity,
      })
    );
    setQuantity(1);
  };
  useEffect(() => {
    const cartInfo = products.find((product) => product.slug === slug);

    if (cartInfo) {
      setDetails(cartInfo);
    } else {
      window.location.href = "/";
    }
  }, [slug]);
  return details ? (

      <section className="details p-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mt-4 text-center text-lg-start">
              <img src={details.image} alt="product-image" />
            </div>
            <div className="col-12 col-lg-6 align-self-center mt-4 text-center text-lg-start">
              <h2 className="mb-3">{details.name}</h2>
              <p className="fw-bold">${details.price}</p>
              <p>{details.description}</p>
              <div className="row d-flex align-items-center  mt-5">
                <div className="col-6 addMoreProductQuantity ">
                  <div className="w-100 ">
                    <span
                      onClick={handleMinusProductQuantity}
                      className="minus rounded-2 px-3 me-3 py-1 bg-black text-white fw-bold text-center"
                    >
                      -
                    </span>
                    <span className="productQuantity">{quantity}</span>
                    <span
                      onClick={handlePlusProductQuantity}
                      className="plus rounded-2 ms-3 py-1 bg-black text-center text-white fw-bold rounded-2 px-3"
                    >
                      +
                    </span>
                  </div>
                </div>
                <button
                  onClick={addProductToCart}
                  className="btn btn-dark col-6 addToCart"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="row">
          <Link to='/'  className="back-home d-blockv mt-5 m-auto  btn btn-dark text-center">Back To home</Link>
          </div>
        </div>
      </section>

      
 
  ) : (
    <h1>product not found</h1>
  );
}

export default Details;
