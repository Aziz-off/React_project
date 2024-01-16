import React from "react";
import Header from "./components/Navbar/Header";
import MainRoutes from "./routes/MainRoutes";
import ProductContextProvider from "./components/context/ProductContextProvider";
import cosmos from "./assets/cosmos.jpg";
import Footer from "./components/Navbar/Footer";

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${cosmos})`, backgroundSize: 'cover' }}>
      <ProductContextProvider>
        <Header />
        
        <MainRoutes />
        <Footer/>
       
      </ProductContextProvider>
    </div>
  );
};

export default App;
