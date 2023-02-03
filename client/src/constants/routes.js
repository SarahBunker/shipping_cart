const GET_PRODUCTS_URL = "/api/products";

const CREATE_PRODUCT_URL = "/api/products";

const DELETE_PRODUCT_URL = (productId) => {
  return `/api/products/${productId}`
}

const UPDATE_PRODUCT_URL = (productId) => {
  return `/api/products/${productId}`
}

const GET_CART_ITEMS_URL = "/api/cart"

const ADD_CART_ITEMS_URL = "/api/add-to-cart"

const EMPTY_CART_URL = "/api/checkout"



const Routes = { 
  GET_PRODUCTS_URL, 
  CREATE_PRODUCT_URL, 
  DELETE_PRODUCT_URL, 
  UPDATE_PRODUCT_URL, 
  GET_CART_ITEMS_URL, 
  ADD_CART_ITEMS_URL,
  EMPTY_CART_URL,
};
export default Routes;