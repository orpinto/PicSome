import React, { useState, useEffect } from "react";

const ShopContext = React.createContext();

function ShopContextProvider(props) {
  const [pictures, setPictures] = useState([]);

  //create methods
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then(res => res.json())
      .then(res => setPictures(res))
      .catch(err => console.log("Error in retrieving all photos"));
  }, []);

  function toggleFavorite(id) {
    const updatedArr = pictures.map(pic => {
      if (pic.id === id) {
        return { ...pic, isFavorite: !pic.isFavorite };
      }
      return pic;
    });
    setPictures(updatedArr);
  }

  return (
    <ShopContext.Provider value={{ pictures, toggleFavorite }}>
      {props.children}
    </ShopContext.Provider>
  );
}

export { ShopContextProvider, ShopContext };
