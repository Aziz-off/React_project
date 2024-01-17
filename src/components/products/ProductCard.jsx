import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import Detail from "./Detail";
import { AddShoppingCart } from "@mui/icons-material";
import { useCart } from "../context/CartContextProvider";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ elem }) {
  const [expanded, setExpanded] = React.useState(false);
  const { deleteProduct } = useProducts();
  const { addProductToCart } = useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 250, margin: "10px auto",  background: "none" }}>
      <CardMedia
        sx={{ cursor: "pointer", borderRadius: "20px"}}
        component="img"
        height="300"
        image={elem.picture}
        alt="Paella dish"
        onClick={() => navigate(`/details/${elem.id}`)}
      />
 <CardContent sx={{ margin: 0, padding: "15px", textAlign: "center", color: "white" }}>
  <div style={{ marginBottom: "20px" }}>{elem.title}</div>
</CardContent>

      <CardContent sx={{margin: 0, padding: "0 15px"}}>
        <Typography color={"white"} component="h6">{elem.category}</Typography>
        <Typography variant="body2" color={"white"}>
          {elem.price} $
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{color:"white"}}>
          <FavoriteIcon />
        </IconButton>
        <Button
          variant="contained"
          size="small"
          sx={{ bgcolor: "#ff6347", fontWeight: 900, marginRight: "5px" }}
          onClick={() => navigate(`/edit/${elem.id}`)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{ bgcolor: "#333333", fontWeight: 900, color: "#ff6347" }}
          onClick={() => deleteProduct(elem.id)}
        >
          Delete
        </Button>
        <IconButton onClick={() => addProductToCart(elem)} sx={{color:"white"}}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}