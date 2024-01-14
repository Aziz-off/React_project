import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import React from "react";
import { ACTION_PRODUCTS, API_PRODUCTS } from "../../helpers/const";
import { useNavigate } from "react-router-dom";

const productContext = createContext();

export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  product: [],
  oneProduct: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_PRODUCTS.GET_PRODUCTS:
      return { ...state, products: action.payload.data };
      break;

    case ACTION_PRODUCTS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
      break;

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      let res = await axios(API_PRODUCTS);
      dispatch({
        type: ACTION_PRODUCTS.GET_PRODUCTS,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id) {
    try {
      let { data } = await axios(`${API_PRODUCTS}/${id}`);
      dispatch({
        type: ACTION_PRODUCTS.GET_ONE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function createProduct(newProduct) {
    try {
      await axios.post(API_PRODUCTS, newProduct);
    } catch (error) {
      console.log(error);
    }
  }

  async function editProduct(newProduct) {
    try {
      await axios.patch(`${API_PRODUCTS}/${newProduct.id}`, newProduct);
	  getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API_PRODUCTS}/${id}`);
	  getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    createProduct,
    getProducts,
    products: state.products,
    oneProduct: state.oneProduct,
    getOneProduct,
	editProduct,
	deleteProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
