import React from "react";
import Header from "./components/Navbar/Header";
import MainRoutes from "./routes/MainRoutes";
import cosmos from "./assets/cosmos.jpg";
import Footer from "./components/Navbar/Footer";
import AuthContextProvider from "./components/context/AuthContextProvider";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cosmos})`,
        backgroundSize: "cover",
        paddingTop: "1px",
      }}
    >
      <AuthContextProvider>
        <Header />
        <MainRoutes />
        <Footer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
