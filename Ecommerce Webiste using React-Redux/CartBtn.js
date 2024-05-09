import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function CartBtn() {
  const state = useSelector((state) => state.addItem); 
  return (
    <NavLink to="/cart" className="btn btn-outline-primary d-flex align-items-center me-4">
      <span className="fa fa-shopping-cart me-2"></span> 
      <span className="me-1">Cart</span>
      <span className="d-flex align-items-center">({state.length})</span>
    </NavLink>
  );
}

export default CartBtn;
