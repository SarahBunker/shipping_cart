import axios from 'axios'
import { useState, useEffect } from 'react'; 
import Title from "./Title";
import ProductList from "./ProductList";
import Form from "./Form";

const App = () => {
  const [products, setProducts] = useState([]);
  // const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("api/products");
      const data = response.data;
      console.log("data", data)
      console.log(typeof data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  const handleSubmit = async (newProduct, callback) => {
    try {
      const response = await axios.post("/api/products", { ...newProduct });
      const data = response.data;
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