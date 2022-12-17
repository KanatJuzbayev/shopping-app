import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cartSlice";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <p>{name}</p>
      <p>${price} </p>
      <p>x{quantity}</p>
      <p>Total ${total}</p>
      <div>
        <button className="button cart-actions" onClick={removeHandler}>
          -
        </button>
        <button className="button cart-actions" onClick={addHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
