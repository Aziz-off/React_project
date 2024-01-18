import React, { useEffect, useState } from "react";
import { useProducts } from "../components/context/ProductContextProvider";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Container, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";
import { useCart } from "../components/context/CartContextProvider";

const DetailsPage = () => {
  const { getOneProduct, oneProduct } = useProducts();
  const {addProductToCart,checkProductInCart} = useCart()
  const { id } = useParams();
  const navigate = useNavigate();
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

  useEffect(() => {
    getOneProduct(id);
  }, [id, getOneProduct]);

  const handleGoBack = () => {
    navigate("/");
  };

  const handleOpenTrailerModal = () => {
    setIsTrailerModalOpen(true);
  };

  const handleCloseTrailerModal = () => {
    setIsTrailerModalOpen(false);
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
                <Typography
                  variant="h6"
                  component="div"
                  color={"white"}
                  fontFamily={"fantasy"}
                >
                  {oneProduct.category}
                </Typography>
                <br />
                <Typography
                  variant="h6"
                  component="div"
                  color={"white"}
                  fontFamily={"fantasy"}
                >
                  {oneProduct.year}
                </Typography>
                <br />
                  <Typography
                    variant="h4"
                    component="div"
                    color={"white"}
                    fontFamily={"fantasy"}
                  >
                    {oneProduct.price}$
                  </Typography>
                <CardActions sx={{ position: "absolute", top: 0, right: 0 }}>
                  <IconButton sx={{ color: "white" }} onClick={handleGoBack}>
                    <CloseIcon />
                  </IconButton>
                </CardActions>
                <CardActions>
                {checkProductInCart(oneProduct.id) ? (<Button sx={{fontFamily:"fantasy"}}>Already in Cart</Button>) : (<Button sx={{ m: 2 }}
                      size="small"
                      variant="contained"
                       onClick={()=> addProductToCart(oneProduct)}>Bye for {oneProduct.price}$</Button>)} 
                </CardActions>
                <CardActions>
                  <Button
                    sx={{ m: 2 }}
                    size="small"
                    variant="contained"
                    onClick={handleOpenTrailerModal}
                  >
                    View Trailer
                  </Button>
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
          <Modal
            open={isTrailerModalOpen}
            onClose={handleCloseTrailerModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: "80vw",
                height: "80vh",
                overflow: "auto",
                bgcolor: "#000",
                color: "#fff",
                border: "2px solid #fff",
                boxShadow: 24,
                p: 4,
                position: 'relative',
              }}
            >
              <IconButton
                sx={{ color: "white", position: "absolute", top: 0, right: 0 }}
                onClick={handleCloseTrailerModal}
              >
                <CloseIcon />
              </IconButton>
              <ReactPlayer
                url={oneProduct.videoPath}
                width="100%"
                height="100%"
                controls={true}
              />
            </Box>
          </Modal>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DetailsPage;
