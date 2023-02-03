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
      let quantity = 0
      let total = 0
      items.forEach(item => {
        quantity += item.quantity
        total += item.price * item.quantity
      })
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
    console.log("In handleSubmit", newProduct)
    const data = await ProductService.createProduct(newProduct)
    setProducts(products.concat(data));
    if (callback) {
      callback();
    }
    // try {
    //   console.log("About to Try")
    //   const data = await ProductService.createProduct(...newProduct)
    //   console.log(data)
    //   setProducts(products.concat(data));
    //   if (callback) {
    //     callback();
    //   }
    // } catch (e) {
    //   console.error("Error");
    // }
  };

  const handleCheckout = async () => {
    const data = await CartServices.emptyCart()
    setCart({ quantity: 0, items: [], total: 0 });
  }

  const handleDelete = async (productID) => {
    try {
      const data = await ProductService.deleteProduct(productID)
      setProducts(products.filter(product => product._id !== productID))
    } catch (e) {
      console.error("Error deleting.")
    }
  }

  const handleAddToCart = async (productID) => {
    try {
      const data = await CartServices.addCartItems(productID);
      setProducts(products.map(product => {
        if (product._id === productID.productId) {
          return {...product, quantity: product.quantity - 1}
        } else {
          return product
        }
      }))
      let newCartItems;
      if (cart.items && cart.items.length > 0) {
        
        let existingCartItem = cart.items.filter(item => item.productId === data.item.productId)[0];
        
        if (existingCartItem) {
          newCartItems = cart.items.map(item => {
          if (item.productId === existingCartItem.productId) {
            item.quantity += 1
          }
            return item
          })
        } else {
        newCartItems = cart.items.concat(data.item)
        }
      } else {
        newCartItems = cart.items.concat(data.item)
      }

      setCart({ quantity: cart.quantity + 1, items: newCartItems, total: cart.total + data.item.price })
    } catch (e) {
      console.error("Error adding to cart.")
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
      <Title {...cart} onClick={handleCheckout} />
      <main>
        <ProductList products={products} onDelete={handleDelete} onUpdate={handleUpdate} onAddToCart={handleAddToCart} />
        <Form onSubmit={handleSubmit} />
      </main>
    </div>
  );
}

export default App;