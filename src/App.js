import React from "react";
import Header from "./components/Navbar/Header";
import MainRoutes from "./routes/MainRoutes";
import cosmos from "./assets/cosmos.jpg";
import Footer from "./components/Navbar/Footer";


const App = () => {
  return (
    <div style={{ backgroundImage: `url(${cosmos})`, backgroundSize: 'cover' }}>
      
        <Header />
        <MainRoutes />
        <Footer/>
       
    
    </div>
  );
};

export default App;