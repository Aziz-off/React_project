import { Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import CategorySelect from "../products/CategorySelect";

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  picture: "",
  videoPath: "",
  year: "",
};

const Form = ({ isEdit }) => {
  const { createProduct, editProduct, oneProduct } = useProducts();

  const [product, setProduct] = useState(init);
  const navigate = useNavigate();
  useEffect(() => {
    if (isEdit && oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleEditedProduct() {
    for (let key in product) {
      if (!product[key]) {
        alert("empty fields");
        return;
      }
    }
    editProduct(product);
    setProduct(init);
    navigate("/");
  }

  function handleInput(e) {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  function addProduct() {
    createProduct(product);
    setProduct(init);
    navigate("/");
  }

  return (
    <FormControl
      sx={{ gap: "20px", width: "100%", margin: "50px auto" }}
      color="success"
    >
      <TextField
        placeholder="enter title"
        variant="outlined"
        name="title"
        fullWidth
        onChange={handleInput}
        value={product.title}
        sx={{backgroundColor: "grey", borderRadius: '10px', opacity: '0.6'}}
      />
      <TextField
        placeholder="enter release year"
        variant="outlined"
        name="year"
        fullWidth
        onChange={handleInput}
        value={product.year}
        sx={{backgroundColor: "grey", borderRadius: '10px', opacity: '0.6'}}
      />
      <TextField
        placeholder="enter description"
        variant="outlined"
        name="description"
        fullWidth
        onChange={handleInput}
        value={product.description}
        sx={{backgroundColor: "grey", borderRadius: '10px', opacity: '0.6'}}
      />
      <CategorySelect handleInput={handleInput} />
      <TextField
        placeholder="enter price"
        variant="outlined"
        name="price"
        fullWidth
        onChange={handleInput}
        value={product.price}
        sx={{backgroundColor: "grey", borderRadius: '10px', opacity: '0.6'}}
      />
      <TextField
        placeholder="enter url IMG"
        variant="outlined"
        name="picture"
        fullWidth
        onChange={handleInput}
        value={product.picture}
        sx={{backgroundColor: "grey", borderRadius: '10px', opacity: '0.6'}}
      />
      <TextField
        placeholder="enter url VIDEO"
        variant="outlined"
        name="videoPath"
        fullWidth
        onChange={handleInput}
        value={product.videoPath}
        sx={{backgroundColor: "grey", borderRadius: '10px', opacity: '0.6'}}
      />
      {isEdit ? (
        <Button
          sx={{
            bgcolor: "#ff6347",
            color: "#fff",
            "&:hover": { bgcolor: "#cc4e3d" },
          }}
          fullWidth
          size="large"
          onClick={handleEditedProduct}
        >
          Save changes
        </Button>
      ) : (
        <Button
          sx={{
            bgcolor: "#ff6347",
            color: "#fff",
            "&:hover": { bgcolor: "#cc4e3d" },
          }}
          fullWidth
          size="large"
          onClick={addProduct}
        >
          Add
        </Button>
      )}
    </FormControl>
  );
};

export default Form;
