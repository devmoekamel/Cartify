const { AxiosClient } = require("./AxiosClient");

export const getallproducts = () => AxiosClient.get("/products");

export const getproductbyId = (id) => AxiosClient.get(`/products/${id}`);
export const getproductsbyCategory = (category) =>
  AxiosClient.get(`/products/category/${category}`);

// /products/categories
