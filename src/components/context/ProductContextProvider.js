import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import React from "react";
import { ACTION_PRODUCTS, API_CATEGORIES, API_PRODUCTS } from "../../helpers/const";
import { useNavigate } from "react-router-dom";

const productContext = createContext();

export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: null,
  categories:[],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_PRODUCTS.GET_PRODUCTS:
      return { ...state, products: action.payload.data };
      break;

    case ACTION_PRODUCTS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
      break;
    case ACTION_PRODUCTS.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      let res = await axios(`${API_PRODUCTS}/${window.location.search}`);
      dispatch({
        type: ACTION_PRODUCTS.GET_PRODUCTS,
        payload: res,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  
  
  
  async function getOneProduct(id) {
    try {
      let { data } = await axios(`${API_PRODUCTS}/${id}`);
      console.log("getOneProduct Data:", data);
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

  //! GET_CATEGORIES
  const getCategories = async () => {
    const result = await axios(API_CATEGORIES);
    dispatch({ type: ACTION_PRODUCTS.GET_CATEGORIES, payload: result.data });

  };
  //! CREATE_CATEGORIES
  const createCategories = async (newCategory) => {
    await axios.post(API_CATEGORIES, newCategory);
  };
  //!GET_COMMENTS
  const getComments = async (id) => {
    const result = await axios(`${API_PRODUCTS}/${id}`);
    dispatch({
      type: ACTION_PRODUCTS.GET_COMMENTS,
      payload: { id, comments: result.data.comments },
    });
  };
  
  //!ADD_COMMENTS
  async function addComment(id, newCommentText) {
    console.log(id, newCommentText)
    try {
      const response = await axios.patch(`${API_PRODUCTS}/${id}`, newCommentText);
      console.log(response)
      dispatch({
        type: ACTION_PRODUCTS.GET_COMMENTS,
        payload: response.data.comments,
      });
      getComments(id)
    } catch (error) {
      console.error(error);
    }
  }
  
//!==========================SEARCH && FILTER===========================
const fetchByParams = (query, value) => {
  const search = new URLSearchParams(window.location.search);

  if (value === "all") {
    search.delete(query);
  } else {
    search.set(query, value);
  }

  const url = `${window.location.pathname}?${search.toString()}`;
  console.log("Generated URL:", url); // Log the generated URL
  navigate(url);
  getProducts();
};


  const values = {
    createProduct,
    getProducts,
    products: state.products,
    oneProduct: state.oneProduct,
    getOneProduct,
    getCategories,
    createCategories,
    categories: state.categories,
	  editProduct,
	  deleteProduct,
    fetchByParams,
    addComment,
    comments: state.comments,
    getComments
  };
  
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
