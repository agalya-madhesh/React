import React from "react";
import { NavLink } from "react-router-dom";

function CartBtn() {
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary d-flex align-items-center me-4">
        <span className="fa fa-shopping-cart me-1"></span> Cart
      </NavLink>
    </>
  );
}

export default CartBtn;
