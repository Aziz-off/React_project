import React from "react";
import ProductList from "../components/products/ProductList";
import WatchNow from "../components/Navbar/WatchNow";
import cosmos from "../assets/cosmos.jpg";


const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cosmos})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "32px",
        }}
      >
        <div>
          <h1
            style={{
              color: "grey",
              letterSpacing: "1.5px",
              fontWeight: "600",
            }}
          >
            Product page
          </h1>
        </div>
      </section>
      <ProductList />
      <WatchNow />
      
    </div>
  );
};

export default HomePage;
