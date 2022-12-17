import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const itemList = useSelector((state) => state.cart.itemList);

  return (
    <div className="cart-container">
      <h2 className="cart_tittle">Your Cart</h2>
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>
            <CartItem
              name={item.name}
              quantity={item.quantity}
              total={item.totalPrice}
              price={item.price}
              id={item.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
