import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContextProvider";
import { useFavorites } from "../context/FavoriteContextProvider";
import { useProducts } from "../context/ProductContextProvider";
import { AddShoppingCart } from "@mui/icons-material";

const FixedHeightCard = styled(Card)({
  width: 250,
  margin: "10px auto",
  background: "none",
  display: "flex",
  flexDirection: "column",
});

const FixedHeightCardContent = styled(CardContent)({
  padding: "15px",
  textAlign: "center",
  color: "white",
  height: "50px",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const OtherContent = styled(CardContent)({
  margin: 0,
  padding: "0 15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export default function ProductCard({ elem }) {
  const navigate = useNavigate();
  const { addProductToCart } = useCart();
  const { addProductToFavorites } = useFavorites();
  const { deleteProduct } = useProducts();
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Card sx={{ width: 250, margin: "10px auto", background: "none" }}>
      <FixedHeightCard>
        <CardMedia
          sx={{
            cursor: "pointer",
            borderRadius: "12px",
            transform: "scale(1)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
          component="img"
          height="300"
          image={elem.picture}
          alt="Product"
          onClick={() => navigate(`/details/${elem.id}`)}
        />

        <FixedHeightCardContent>
          <Typography sx={{ fontFamily: "fantasy", fontWeight: "bold" }} component="h1">
            {elem.title}
          </Typography>
        </FixedHeightCardContent>

        <OtherContent>
          <Typography
            sx={{ fontFamily: "fantasy", fontWeight: "bold" }}
            color="white"
            component="h6"
          >
            {elem.category}
          </Typography>
          <Typography
            sx={{ fontFamily: "fantasy", fontWeight: "bold" }}
            variant="body2"
            color="white"
          >
            {elem.price} $
          </Typography>
        </OtherContent>

        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              addProductToFavorites(elem);
              setIsFavorite((prevIsFavorite) => !prevIsFavorite);
            }}
            aria-label="add to favorites"
            sx={{ color: isFavorite ? "red" : "white" }}
          >
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
          <IconButton
            onClick={() => addProductToCart(elem)}
            sx={{ color: "white" }}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </FixedHeightCard>
    </Card>
  );
}
