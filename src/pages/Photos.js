import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils";
import { ShopContext } from "../ShopContext";

function Photos() {
  const { pictures } = useContext(ShopContext);
  const images = pictures.map((pic, i) => {
    return <Image key={pic.id} img={pic} className={getClass(i)} />;
  });

  return <main className="photos">{images}</main>;
}

export default Photos;
