import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const [ref, isHovered] = useHover();
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    ShopContext
  );

  function cart() {
    const alreadyInCart = cartItems.find(item => item.id === img.id);
    if (isHovered && !alreadyInCart) {
      return (
        <i
          onClick={() => addToCart(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    } else if (alreadyInCart) {
      return (
        <i
          onClick={() => removeFromCart(img)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    }
  }

  return (
    <div ref={ref} className={`${className} image-container`}>
      {img.isFavorite && (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      )}
      {isHovered && !img.isFavorite && (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      )}
      {cart()}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string.isRequired,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired
  })
};

export default Image;
