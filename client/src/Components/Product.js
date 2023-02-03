import React from "react";
import { useState, useEffect } from "react";

const Product = ({
  title,
  _id,
  quantity,
  price,
  onDelete,
  onUpdate,
  onAddToCart,
}) => {
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [editIsVisible, setEditIsVisible] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(_id);
  };

  const toggleEdit = () => {
    setEditIsVisible(!editIsVisible);
    resetInputs();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    let updatedProduct = {
      title: newTitle || title,
      quantity: Number(newQuantity) || Number(quantity),
      price: Number(newPrice) || Number(price),
    };
    onUpdate(_id, updatedProduct);
    toggleEdit();
  };

  const resetInputs = () => {
    setNewTitle("");
    setNewPrice("");
    setNewQuantity("");
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (quantity <= 0) return;

    onAddToCart({ productId: _id });
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className={quantity > 0 ? "quantity" : "quantity none-left"}>
          {quantity} in stock
        </p>
        <div className="actions product-actions">
          <a
            className={quantity > 0 ? "button add-to-cart" : "button disabled"}
            onClick={handleAddToCart}
          >
            Add to Cart
          </a>
          <a className="button edit" onClick={toggleEdit}>
            Edit
          </a>
        </div>
        <a className="delete-button" onClick={handleDelete}>
          <span>X</span>
        </a>
        <div className={`edit-form ${editIsVisible ? "visible" : ""}`}>
          <h3>Edit Product</h3>
          <form>
            <div className="input-group">
              <label htmlFor="product-name">Product Name</label>
              <input
                onChange={(e) => setNewTitle(e.target.value)}
                type="text"
                id="product-name"
                placeholder={title}
                value={newTitle}
              />
            </div>
            <div className="input-group">
              <label htmlFor="product-price">Price</label>
              <input
                onChange={(e) => setNewPrice(e.target.value)}
                type="text"
                id="product-price"
                placeholder={price}
                value={newPrice}
              />
            </div>
            <div className="input-group">
              <label htmlFor="product-quantity">Quantity</label>
              <input
                onChange={(e) => setNewQuantity(e.target.value)}
                type="text"
                id="product-quantity"
                placeholder={quantity}
                value={newQuantity}
              />
            </div>
            <div className="actions form-actions">
              <a className="button" onClick={handleEdit}>
                Update
              </a>
              <a className="button" onClick={toggleEdit}>
                Cancel
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
