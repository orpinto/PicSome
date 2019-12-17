import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { ShopContext } from "../ShopContext";

function Cart() {
  const { cartItems, emptyCart } = useContext(ShopContext);
  const [ordering, setIsOrdering] = useState(false);
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setIsOrdering(true);
    setTimeout(() => {
      alert("Order placed!");
      emptyCart();
      setIsOrdering(false);
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:{" "}
        {`${(cartItemElements.length * 5.99).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}`}
      </p>
      {cartItems.length > 0 && (
        <div className="order-button">
          <button onClick={placeOrder}>
            {!ordering ? "Place Order" : "Order..."}
          </button>
        </div>
      )}
    </main>
  );
}

export default Cart;
