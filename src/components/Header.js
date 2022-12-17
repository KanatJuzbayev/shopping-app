import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header>
      <nav className="header-nav">
        <div className="header">
          <h2 className="header-h2">Redux Shopping App</h2>
          <Cart />
          <button onClick={logout} className="button logout_button">
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
