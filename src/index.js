import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./components/context/ProductContextProvider";
import CartContextProvider from "./components/context/CartContextProvider";
import FavoritesContextProvider from "./components/context/FavoriteContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
        <CartContextProvider>
          <FavoritesContextProvider>
            <App/>
        </FavoritesContextProvider>
        </CartContextProvider>
      </ProductContextProvider>

  </BrowserRouter>
);
