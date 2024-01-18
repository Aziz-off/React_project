import React from "react";
import ProductList from "../components/products/ProductList";
import WatchNow from "../components/Navbar/WatchNow";
import cosmos from "../assets/cosmos.jpg";

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
        <div>
          <h1
            style={{
              color: "white",
              letterSpacing: "1.5px",
              fontWeight: "600",
              fontFamily: "fantasy",
            }}
          >
            MOST INTERESTING
          </h1>
        </div>
      </section>
      <ProductList />
      <WatchNow />
    </div>
  );
};

export default HomePage;
