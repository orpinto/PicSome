import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../ShopContext";

function Header() {
  const { cartItems } = useContext(ShopContext);

  return (
    <header>
      <h2>
        <Link to="/">Pic Some</Link>
      </h2>
      <Link to="/cart">
        <i
          className={`ri-shopping-cart-${
            cartItems.length > 0 ? "fill" : "line"
          } ri-fw ri-2x`}
        ></i>
      </Link>
    </header>
  );
}

export default Header;
