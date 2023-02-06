import { useState, useEffect } from "react";
import Title from "./Title";
import ProductList from "./ProductList";
import Form from "./Form";
import ProductService from "../services/productServices";
import CartServices from "../services/CartServices";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductService.getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchItemsInCart = async () => {
      const items = await CartServices.getCartItems();
      setCart(items);
    };
    fetchItemsInCart();
  }, []);

  const handleSubmit = async (newProduct, callback) => {
    const data = await ProductService.createProduct(newProduct);
    setProducts(products.concat(data));
    if (callback) {
      callback();
    }
  };

  const handleCheckout = async () => {
    const data = await CartServices.emptyCart();
    setCart([]);
  };

  const handleDelete = async (productID) => {
    const data = await ProductService.deleteProduct(productID);
    setProducts(products.filter((product) => product._id !== productID));
  };

  const handleAddToCart = async (productID) => {
    const data = await CartServices.addCartItems(productID);
    setProducts(
      products.map((product) => {
        if (product._id === productID.productId) {
          return data.product;
        } else {
          return product;
        }
      })
    );

    let newCart;
    let existingCartItem = cart.filter(
      (item) => item.productId === data.item.productId
    )[0];
    if (existingCartItem) {
      newCart = cart.map((item) => {
        if (item.productId === existingCartItem.productId) {
          return data.item;
        }
        return item;
      });
    } else {
      newCart = cart.concat(data.item);
    }
    setCart(newCart);
  };

  const handleUpdate = async (productID, newProduct) => {
    try {
      const data = await ProductService.updateProduct(productID, newProduct);
      console.log(productID, newProduct);
      setProducts(
        products.map((product) => {
          if (product._id === productID) {
            return data;
          }
          return product;
        })
      );
    } catch (e) {
      console.error("Error updating.");
    }
  };

  return (
    <div id="app">
      <Title cart={cart} onClick={handleCheckout} />
      <main>
        <ProductList
          products={products}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onAddToCart={handleAddToCart}
        />
        <Form onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default App;
