import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../components/context/ProductContextProvider";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";

const DetailsPage = () => {
  const { getOneProduct, oneProduct } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate("/");

  useEffect(() => {
    getOneProduct(id);
  }, []);

  const handleGoBack = () => {
    // Здесь вы можете добавить свою логику для перехода на главную страницу
    // Например, использовать useHistory из react-router-dom
    // или просто использовать window.location.href = "/"
    
  };

  return (
    <div>
      {oneProduct ? (
        <Container sx={{ marginTop: 8 }}>
          <Card
            sx={{
              maxWidth: "100%",
              mb: 10,
              background: "transparent",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              color: "white",
            }}
          >
            <CardActionArea sx={{ height: 600, display: "flex", p: 2 }}>
              <CardMedia
                sx={{ width: 500, objectFit: "contain" }}
                component="img"
                height="340"
                image={oneProduct.picture}
                alt="product"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {oneProduct.title}
                </Typography>
                <br />
                <Typography sx={{ color: "white" }} variant="h6" color="text.secondary" component="div">
                  {oneProduct.description}
                </Typography>
                <br />
                <CardContent>
                  <Typography
                    sx={{ color: "white" }}
                    variant="h4"
                    component="div"
                    color="text.secondary"
                  >
                    {oneProduct.price}$
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button sx={{ m: 2 }} size="small" variant="contained">
                    Add to Bag
                  </Button>
                </CardActions>
                <CardActions>
                  <Button sx={{ m: 2 }} size="small" variant="contained">
                    View Trailer
                  </Button>
                  {/* Используйте Link для перехода на главную страницу */}
                  <Link to="/">
                    <button onClick={handleGoBack}>X</button>
                  </Link>
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
