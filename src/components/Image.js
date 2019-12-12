import React, { useState, useContext } from "react";
import { ShopContext } from "../ShopContext";

function Image({ className, img }) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite } = useContext(ShopContext);

  const cart = isHovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} image-container`}
    >
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
      {cart}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

export default Image;
