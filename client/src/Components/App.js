import axios from 'axios'
import { useState, useEffect } from 'react';
import Title from "./Title";
import ProductList from "./ProductList";
import Form from "./Form";
import ProductService from "../services/productServices";
import CartServices from "../services/CartServices";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({quantity: 0, items: [], total: 0})
  // items objects {title, quantityInCart, pricePerItem}

  console.log("app rendering: ", {products});

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductService.getProducts();
      setProducts(data)
    }
    fetchProducts()
    console.log("Got products")
  }, [])

  useEffect(() => {
    const fetchItemsInCart = async () => {
      const items = await CartServices.getCartItems();
      console.log("items in cart load", {items});
      const quantity = 0 //FixMe
      const total = 0 //FixMe
      let newCart = {
        quantity: quantity,
        items: items,
        total: total,
      }
      console.log("items before setCart:", { items });
      console.log("newCart items before setCart:", newCart.quantity);
      setCart(newCart)
    }
    fetchItemsInCart()
  }, [])

  const handleSubmit = async (newProduct, callback) => {
    try {
      const data = await ProductService.createProduct(...newProduct)
      setProducts(products.concat(data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error("Error");
    }
  };

  const handleDelete = async (productID) => {
    try {
      const data = await ProductService.deleteProduct(productID)
      setProducts(products.filter(product => product._id !== productID))
    } catch (e) {
      console.error("Error deleting.")
    }
  }

  const handleUpdate = async (productID, newProduct) => {
    try {
      const data = await ProductService.updateProduct(productID, newProduct)
      console.log(productID, newProduct)
      setProducts(products.map(product => {
        if (product._id === productID) {
          console.log("updating with: ", {data})
          return data
        }
        return product
      }))
    } catch (e) {
      console.error("Error updating.")
    }
  }

  return (
    <div id="app">
      <Title cart={cart} />
      <main>
        <ProductList products={products} onDelete={handleDelete} onUpdate={handleUpdate}/>
        <Form onSubmit={handleSubmit} />
      </main>
    </div>
  );
}

export default App;