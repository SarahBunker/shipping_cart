import React from 'react';
import { useState } from 'react';

const Product = ({title, _id, quantity, price, onDelete, onUpdate}) => {
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [editIsVisible, setEditIsVisible] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(_id);
  }

  const toggleEdit = () => {
    setEditIsVisible(!editIsVisible);
  }

  const handleEdit = (e) => {
    e.preventDefault();
    let updatedProduct = {
      title,
      quantity: Number(quantity),
      price: Number(price),
    };
    onUpdate(_id, updatedProduct);
    toggleEdit();
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (quantity <= 0) return
    let newState = {
      title,
      quantity: Number(quantity)- 1,
      price: Number(price),
    }
    console.log("title", newState.title)
    console.log("quantity", newState.quantity)
    console.log("price", newState.price)
    onUpdate(_id, newState)
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className={quantity > 0 ? "quantity":"quantity none-left"}>{quantity} in stock</p>
        <div className="actions product-actions">
          <a className={quantity > 0 ? "button add-to-cart":"button disabled"} onClick={handleAddToCart}>Add to Cart</a>
          <a className="button edit" onClick={toggleEdit}>Edit</a>
        </div>
        <a className="delete-button" onClick={handleDelete}><span>X</span></a>
        <div class={`edit-form ${isFormVisible ? "visible" : ""}`}>
          <h3>Edit Product</h3>
          <form>
            <div class="input-group">
              <label for="product-name">Product Name</label>
              <input onChange={(e) => setNewTitle(e.target.value)} type="text" id="product-name" value={newTitle} />
            </div>
            <div class="input-group">
              <label for="product-price">Price</label>
              <input onChange={(e) => setNewPrice(e.target.value)} type="text" id="product-price" value={newPrice} />
            </div>
            <div class="input-group">
              <label for="product-quantity">Quantity</label>
              <input onChange={(e) => setNewQuantity(e.target.value)} type="text" id="product-quantity" value={newQuantity} />
            </div>
            <div class="actions form-actions">
              <a class="button" onClick={handleEdit}>Update</a>
              <a class="button" onClick={toggleEdit}>Cancel</a>
            </div>
          </form>
        </div>
      </div>
    </div>
)}


export default Product;