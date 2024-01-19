import React, { createContext, useContext, useReducer } from "react";
import {ACTION_PRODUCTS } from "../../helpers/const";
import {
  getLocalStorage,
  calcTotalPrice,
  calcSubPrice,
  getProductsCountInFavorites
} from "../../helpers/function";

export const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const INIT_STATE = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    favoritesLength: getProductsCountInFavorites(),
  };
  

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_PRODUCTS.GET_FAVORITES:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getFavorites = () => {
    let favorites = getLocalStorage();
    
    if (!favorites) {
      localStorage.setItem(
        "favorites",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      
      favorites = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({ type: ACTION_PRODUCTS.GET_FAVORITES, payload: favorites });
  };

  const addProductToFavorites = (product) => {
    let favorites = getLocalStorage("favorites");
    if (!favorites) {
      favorites = { products: [], totalPrice: 0 };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
    let productToFind = favorites.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (productToFind.length === 0) {
      favorites.products.push(newProduct);
    } else {
      favorites.products = favorites.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }
    favorites.totalPrice = calcTotalPrice(favorites.products);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    dispatch({ type: ACTION_PRODUCTS.GET_FAVORITES, payload: favorites });
  };

  const checkProductInFavorites = (id) => {
    let favorites = getLocalStorage("favorites");
    if (favorites) {
      let newFavorites = favorites.products.filter(
        (elem) => elem.item.id === id
      );
      return newFavorites.length > 0 ? true : false;
    }
  };

  const deleteProductFromFavorites = (id) => {
    let favorites = getLocalStorage("favorites");
    favorites.products = favorites.products.filter(
      (elem) => elem.item.id !== id
    );
    favorites.totalPrice = calcTotalPrice(favorites.products);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    dispatch({
      type: ACTION_PRODUCTS.GET_FAVORITES,
      payload: favorites,
    });
  };

  const values = {
    addProductToFavorites,
    favorites: state.favorites,
    getFavorites,
    checkProductInFavorites,
    deleteProductFromFavorites,
    getProductsCountInFavorites,
  };

  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;