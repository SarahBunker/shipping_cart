import React, { useState } from 'react';

const Form = () => {

  const handleClick = (e)=> {
    e.preventDefault();
    const form = document.querySelector('.add-form');
    form.classList.toggle('visible');
  };
  
  return ( 
    <div class="add-form">
      <p><a href="#" onClick={handleClick} class="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div class="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" value=""/>
          </div>

          <div class="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price" value=""/>
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value=""/>
          </div>

          <div class="actions form-actions">
            <a class="button">Add</a>
            <a class="button" onClick={handleClick} >Cancel</a>
          </div>
        </form>
      </div>
   );
}
 
export default Form;