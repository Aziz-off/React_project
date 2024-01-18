import React, { useEffect } from "react";
import { useProducts } from "../components/context/ProductContextProvider";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DetailsPage = () => {
  const { getOneProduct, oneProduct } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      {oneProduct ? (
        <Container sx={{ marginTop: 8 }}>
          <Card
            sx={{
              position: "relative",
              maxWidth: "100%",
              mb: 10,
              background: "transparent",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <CardActionArea sx={{ height: 600, display: "flex", p: 2 }}>
              <CardMedia
                sx={{ width: 1200, objectFit: "contain" }}
                component="img"
                height="540"
                image={oneProduct.picture}
                alt="product"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  color={"white"}
                  fontFamily={"fantasy"}
                >
                  {oneProduct.title}
                </Typography>
                <br />
                <Typography
                  variant="h6"
                  component="div"
                  color={"white"}
                  fontFamily={"fantasy"}
                >
                  {oneProduct.description}
                </Typography>
                <br />
                <CardContent>
                  <Typography
                    variant="h4"
                    component="div"
                    color={"white"}
                    fontFamily={"fantasy"}
                  >
                    {oneProduct.price}$
                  </Typography>
                </CardContent>

                <CardActions sx={{ position: "absolute", top: 0, right: 0 }}>
                  <IconButton sx={{ color: "white" }} onClick={handleGoBack}>
                    <CloseIcon />
                  </IconButton>
                </CardActions>
                <CardActions>
                  <Button sx={{ m: 2 }} size="small" variant="contained">
                    Add to Bag
                  </Button>
                </CardActions>
                <CardActions>
                  <Button sx={{ m: 2 }} size="small" variant="contained">
                    View Trailer
                  </Button>
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DetailsPage;
