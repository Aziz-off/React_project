import React from "react";
import ProductList from "../components/products/ProductList";
import WatchNow from "../components/Navbar/WatchNow";
import cosmos from "../assets/cosmos.jpg";
import Head from "../components/Navbar/Body";
import BoxPart from "../components/Navbar/BoxPart";

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
      <BoxPart />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "32px",
        }}
      >
      </section>
      <ProductList />
      <WatchNow />
    </div>
  );
};

export default HomePage;
