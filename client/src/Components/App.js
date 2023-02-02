import axios from 'axios'
import { useState, useEffect } from 'react';
import Title from "./Title";
import ProductList from "./ProductList";
import Form from "./Form";
import ProductService from "../services/productServices";

const App = () => {
  const [products, setProducts] = useState([]);
  // const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductService.getProducts();
      setProducts(data)
    }
    fetchProducts()
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

  return (
    <div id="app">
      <Title />
      <ProductList products={products}/>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default App;