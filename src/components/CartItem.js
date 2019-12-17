import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";
import useHover from "../hooks/useHover";
import PropTypes from "prop-types";

function CartItem({ item }) {
  const { removeFromCart } = useContext(ShopContext);
  const [ref, isHovered] = useHover();

  return (
    <div className="cart-item">
      <i
        ref={ref}
        onClick={() => removeFromCart(item)}
        className={`ri-delete-bin-${isHovered ? "fill" : "line"}`}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default CartItem;
