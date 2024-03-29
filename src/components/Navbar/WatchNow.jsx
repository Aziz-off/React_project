import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img11 from "../../assets/image 11.jpg";
import img12 from "../../assets/image 12.jpg";
import img13 from "../../assets/image 13.jpg";
import img14 from "../../assets/image 14.jpg";

const Item = styled(Paper)(({ theme }) => ({
  padding: "40px",
  textAlign: "center",
  color: "#000",
  fontWeight: "700",
  borderRadius: "20px",
  background: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "40px",
  width: "95%",
  height: "250px",
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
    transition: "0.3s",
  },
}));

const textStyle = {
  color: "#000",
  fontSize: "36px",
  marginBottom: "150px",
  marginLeft: "40px",
};

const WatchNow = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "0 5%",
        marginTop: "20px",
      }}
    >
     <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "40px",
        
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontWeight: "700",
        padding: "5% 0",
      }}
    >
        <h2
          style={{
            color: "white",
            fontSize: "48px",
            marginBottom: "40px",
            textAlign: "center",
            fontFamily: "fantasy"
          }}
        >
          WATCH NOW
        </h2>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <img
                style={{
                  width: "80%",
                  height: "250px",
                  borderRadius: "10px",
                  marginLeft: "10px",
                }}
                src={img11}
                alt="Casual dress"
              />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item>
              <img
                style={{
                  width: "80%",
                  height: "250px",
                  borderRadius: "10px",
                  marginLeft: "70px",
                }}
                src={img13}
                alt="Formal dress"
              />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item>
              <img
                style={{
                  width: "80%",
                  height: "250px",
                  borderRadius: "10px",
                  marginLeft: "110px",
                }}
                src={img12}
                alt="Party dress"
              />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <img
                style={{
                  width: "80%",
                  height: "250px",
                  borderRadius: "10px",
                  marginLeft: "50px",
                }}
                src={img14}
                alt="Gym dress"
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WatchNow;