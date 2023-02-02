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
    const response = await axios.post(Routes.DELETE_PRODUCT_URL(productID));
    console.log(`Product ${productID} has been deleted.`)
  } catch (e) {
    console.log("Error Deleting product");
  }
}

const ProductService = { getProducts, createProduct }

export default ProductService;

/*
## 1.3. PUT /api/products/:id

Updates the product with the given `id`.

### 1.3.1. Expected Payload

```json
{
  "title": "Keyboard",
  "price": 50,
  "quantity": 5
}
```

### 1.3.2. Successful Response

The updated product is returned.

#### 1.3.2.1. Example Response

```json
{
  "_id": "61d754d72092473d55a809e1",
  "title": "Keyboard",
  "price": 50,
  "quantity": 5,
  "createdAt": "2020-10-04T05:57:02.777Z",
  "updatedAt": "2020-10-04T05:57:02.777Z",
  "_v": 0
}
```

## 1.4. DELETE /api/products/:id

Deletes a product

### 1.4.1. Expected Payload

None

### 1.4.2. Successful Response

Empty response body

#### 1.4.2.1. Example Response

```json

```
*/