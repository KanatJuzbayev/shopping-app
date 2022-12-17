import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/Notification";
import { fetchData, sendCardData } from "./store/cart-actions";

let isFirstRender = true;
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCardData(cart));
    }
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
        ></Notification>
      )}
      <div className="wrapper">{!isLoggedIn ? <Auth /> : <Layout />}</div>
    </div>
  );
}

export default App;
