import React, { useState } from "react";
import AddProduct from "../components/products/AddProduct";
import { Button } from "antd";
import cosmos from "../assets/cosmos.jpg";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{
        backgroundImage: `url(${cosmos})`,
        backgroundSize: "cover",
        paddingTop: "80px",
      }}
    >
      <Button variant="contained" onClick={handleOpen}>
        Add category
      </Button>
      <AddProduct />
    </div>
  );
};

export default AdminPage;
