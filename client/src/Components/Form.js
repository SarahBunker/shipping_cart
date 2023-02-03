import React, { useState } from 'react';

const Form = ({onSubmit}) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  const handleClick = (e)=> {
    e.preventDefault();
    setIsFormVisible(!isFormVisible);
  };

  const handleAddForm = (e)=> {
    e.preventDefault();
    if (title === "") return;
    if (quantity === "") {
      setQuantity(0)
    }
    if (price === "") return;
    onSubmit({
      title,
      price: parseInt(price, 10),
      quantity: parseInt(quantity, 10)
    }, resetInputs)
    
  };

  const resetInputs = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
    setIsFormVisible(!isFormVisible);
  };
  
  return ( 
    <div className={`add-form ${isFormVisible ? "visible" : ""}`}>
      <p><a href="#" onClick={handleClick} className="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input value={title} type="text" id="product-name"  onChange={(e)=> setTitle(e.target.value)}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input value={price} type="text" id="product-price" onChange={(e) => setPrice(e.target.value)}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input value={quantity} type="text" id="product-quantity" onChange={(e)=> setQuantity(e.target.value)}/>
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={handleAddForm}>Add</a>
            <a className="button" onClick={handleClick} >Cancel</a>
          </div>
        </form>
      </div>
   );
}
 
export default Form;