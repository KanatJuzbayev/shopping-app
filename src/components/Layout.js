import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { useEffect } from "react";

const Layout = () => {
  const dispatch = useDispatch();

  const itemList = useSelector((state) => state.cart.itemList);
  let total = 0;
  itemList.forEach((item) => {
    total += item.totalPrice;
  });

  useEffect(() => {
    dispatch(cartActions.setTotalPrice(total));
  }, [total, dispatch]);

  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <div className="layout">
      <Header />
      <Products />
      {showCart && <CartItems />}
      <div className="total-price">
        <h3 className="total-price__title">Total: ${total}</h3>
        <button className="button orderBtn">Place Order</button>
      </div>
    </div>
  );
};

export default Layout;
