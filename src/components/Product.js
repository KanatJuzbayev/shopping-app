import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./Product.css";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ name, id, price }));
  };

  return (
    <div className="card">
      <img className="product-img" src={imgURL} alt={name} />
      <h2>{name}</h2>
      <h3>$ {price}</h3>
      <button className="button product_button" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
