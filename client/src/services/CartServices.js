import axios from "axios";
import Routes from "../constants/routes"

const getCartItems = async () => {
  console.log("getCartItems");
  try{
    const response = await axios.get(Routes.GET_CART_ITEMS_URL);
    return response.data;
  } catch(e) {
    console.log("Error Getting Cart Items");
    return []
  }
}

const addCartItems = async (productID) => {
  try {
    const response = await axios.post(Routes.ADD_CART_ITEMS_URL, productID);
    return response.data;
  } catch (e) {
    console.log("Error ADDING TO CART");
  }
}

// ADD_CART_ITEMS_URL

// const createProduct = async (newProduct) => {
//   try {
//     const response = await axios.post(Routes.CREATE_PRODUCT_URL, { ...newProduct });
//     return response.data;
//   } catch (e) {
//     console.log("Error CREATE");
//   }
// }

// const deleteProduct = async (productID) => {
//   try {
//     const response = await axios.delete(Routes.DELETE_PRODUCT_URL(productID));
//     console.log(`Product ${productID} has been deleted.`)
//   } catch (e) {
//     console.log("Error Deleting product");
//   }
// }

// const updateProduct = async (productID, newProduct) => {
//   try {
//     const response = await axios.put(Routes.UPDATE_PRODUCT_URL(productID), newProduct);
//     console.log(`Product ${productID} has been updated.`)
//     return response.data
//   } catch (e) {
//     console.log("Error Updating product");
//   }
// }

const CartServices = { getCartItems, addCartItems }

export default CartServices;