import { useState, useEffect } from 'react';
// let quantity = 5;
// let items = [{_id: "1231214", title: "chocolate", quantity: 4, price: 100}];
// let total = 15

const Title = ({quantity, items, total}) => {
  // [cart, setCart] = useState({})
  console.log("This is the items", items)
  console.log("This is the quantity", quantity)
  console.log("This is total", total);
  return (
  <header>
    <h1>The Shop!</h1>
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Your cart {quantity > 0 ? `has ${quantity} items`:"is empty"}</p>
      {/* cart should be table */}

      {/* {items.length == 0 ? "":
        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>

        {items.map(item => {
        return (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        )
      })}
      </table>}  */}
      <p>Total: ${total}</p>
      <a className="button checkout disabled">Checkout</a>
    </div>
  </header>
  );
}

export default Title;