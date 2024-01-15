import React from "react";
import ProductList from "../components/products/ProductList";
import WatchNow from "../components/homePage/WatchNow";



const HomePage = () => {
  return (
    <div>
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
    <WatchNow/>
    </div>
  );
};

export default HomePage;
