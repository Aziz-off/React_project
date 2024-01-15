import React from "react";
import Header from "./components/Navbar/Header";
import MainRoutes from "./routes/MainRoutes";
import ProductContextProvider from "./components/context/ProductContextProvider";

const App = () => {
  return (
    <div>
      
      <ProductContextProvider>
      <Header />
        <MainRoutes />
      </ProductContextProvider>
    </div>
  );
};

export default App;
