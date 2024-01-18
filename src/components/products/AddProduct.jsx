import { Container } from "@mui/material";
import React from "react";
import Form from "../form/Form";
import cosmos from "../../assets/cosmos.jpg";

const AddProduct = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cosmos})`,
        backgroundSize: "cover",
        paddingTop: "1px",
      }}
    >
      <Container>
        <Form isEdit={false} />
      </Container>
    </div>
  );
};

export default AddProduct;
