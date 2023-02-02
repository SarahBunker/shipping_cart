const GET_PRODUCTS_URL = "/api/products";

const CREATE_PRODUCT_URL = "/api/products";

const DELETE_PRODUCT_URL = (productId) => {
  return `/api/products/${productId}`
}

const UPDATE_PRODUCT_URL = (productId) => {
  return `/api/products/${productId}`
}

const GET_CART_ITEMS_URL = "/api/cart"



const Routes = { GET_PRODUCTS_URL, CREATE_PRODUCT_URL, DELETE_PRODUCT_URL, UPDATE_PRODUCT_URL };
export default Routes;