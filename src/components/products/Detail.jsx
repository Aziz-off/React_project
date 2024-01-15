import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";

import { useProducts } from "../context/ProductContextProvider";

const Detail = (props) => {
  const { getOneProduct, oneProduct } = useProducts();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    getOneProduct(id);
  }, [id]);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {oneProduct ? (
        <Container sx={{ marginTop: 8 }} >
          <Card sx={{ maxWidth: "100%", mb: 10 }}>
            <CardActionArea sx={{ height: 600, display: "flex", p: 2 }}>
              <CardMedia
                sx={{ width: 500, objectFit: "contain" }}
                component="img"
                height="340"
                image={oneProduct.picture}
                alt="product"
              />
              <CardContent>
              <Typography sx={{ fontFamily: 'system-ui' }} gutterBottom variant="h3" component="div">
  {oneProduct.title}
</Typography>



                <br />
                <Typography
                  variant="h6"
                  color="text.secondary"
                  component="div"
                >
                  {oneProduct.description}
                </Typography>
                <br />
                <CardContent>
                  <Typography
                    variant="h4"
                    component="div"
                    color="text.secondary"
                  >
                    {oneProduct.price}$
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    sx={{ m: 2 }}
                    size="big"
                    variant="contained"
                    onClick={handleOpenModal}
                  >
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

export default Detail;
