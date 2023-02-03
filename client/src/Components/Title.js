import { useState, useEffect } from "react";
// let quantity = 5;
// let items = [{_id: "1231214", title: "chocolate", quantity: 4, price: 100}];
// let total = 15

const Title = ({ cart, onClick }) => {
  let total = 0;
  cart.forEach((item) => (total += item.price * item.quantity));

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <p>{cart.length > 0 ? "" : "Your cart is empty."}</p>

        {/* cart should be table */}

        {cart.length == 0 ? (
          ""
        ) : (
          <table>
            <tbody>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>

              {cart.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{`$ ${item.price}`}</td>
                  </tr>
                );
              })}
              <tr>
                <td>Total:</td>
                <td></td>
                <td>{`$ ${total}`}</td>
              </tr>
            </tbody>
          </table>
        )}
        <a
          onClick={onClick}
          className={
            cart.length > 0 ? "button checkout" : "button checkout disabled"
          }
        >
          Checkout
        </a>
      </div>
    </header>
  );
};

export default Title;
