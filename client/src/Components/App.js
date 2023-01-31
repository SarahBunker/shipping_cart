import Title from "./Title";
import ProductList from "./ProductList";
import data from "../../mockData/data";
import Form from "./Form";
import { useState, useEffect } from 'react'; 

const App = () => {
  const [products, setProducts] = useState([]);
  // const [total, setTotal] = useState(0);

  useEffect(() => {
    setProducts(data);
  }, [])

  return ( 
    <div> 
      <Title />
      <ProductList products={products}/>
      <Form />
    </div>
  );
}

export default App;