import axios from "axios";
import Routes from "../constants/routes"

const getProducts = async () => {
  try{
    const response = await axios.get(Routes.GET_PRODUCTS_URL);
    return response.data;
  } catch(e) {
    console.log("Error Getting Products");
  }
}

const createProduct = async (newProduct) => {
  try {
    const response = await axios.post(Routes.CREATE_PRODUCT_URL, { ...newProduct });
    return response.data;
  } catch (e) {
    console.log("Error CREATE");
  }
}

const deleteProduct = async (productID) => {
  try {
    const response = await axios.delete(Routes.DELETE_PRODUCT_URL(productID));
    console.log(`Product ${productID} has been deleted.`)
  } catch (e) {
    console.log("Error Deleting product");
  }
}

const updateProduct = async (productID, newProduct) => {
  try {
    const response = await axios.put(Routes.UPDATE_PRODUCT_URL(productID), newProduct);
    console.log(`Product ${productID} has been updated.`)
    return response.data
  } catch (e) {
    console.log("Error Updating product");
  }
}

const ProductService = { getProducts, createProduct, updateProduct, deleteProduct, }

export default ProductService;