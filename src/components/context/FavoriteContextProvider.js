import React, { createContext, useContext, useReducer } from "react";
import {ACTION_PRODUCTS } from "../../helpers/const";
import {
  getLocalStorage,
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

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getFavorites = () => {
    let favorites = getLocalStorage();
    //проверка на наличие данных под ключом cart в localStorage
    if (!favorites) {
      localStorage.setItem(
        "favorites",
        JSON.stringify({ products: [] })
      );
      // перезаписываем переменную favorites с null на обект
      favorites = {
        products: []
      };
    }
    dispatch({ type: ACTION_PRODUCTS.GET_FAVORITES, payload: favorites });
  };

  const addProductToFavorites = (product) => {
    let favorites = getLocalStorage();
    if (!favorites) {
      favorites = { products: [] };
    }
    let productToFind = favorites.products.find(
      (elem) => elem.item.id === product.id
    );
    if (!productToFind) {
      let newProduct = {
        item: product,
        count: 1,
        subPrice: +product.price,
      };
      favorites.products.push(newProduct);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    dispatch({ type: ACTION_PRODUCTS.GET_FAVORITES, payload: favorites });
  };
  
  const checkProductInFavorites = (id) => {
    let favorites = getLocalStorage();
    if (favorites) {
      let newFavorites = favorites.products.filter(
        (elem) => elem.item.id == id
      );
      return newFavorites.length > 0 ? true : false;
    }
  };
  const deleteProductFromFavorites = (id) => {
    let favorites = getLocalStorage();
    // фильтруем массив products, и оставляем только те продукты, у которых id не совпадает с id переданным при вызове функции
    favorites.products = favorites.products.filter((elem) => {
      return elem.item.id !== id;
    });
    
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

export default FavoriteContextProvider;
