import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled(Box)(({ theme }) => ({
  color: "#FFF",
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  textAlign: "center",
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{fontFamily: "fantasy"}}
        >
          🎥<b className="online">on</b>-line
        </IconButton>
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          © {new Date().getFullYear()} Makers
        </Typography>
        <Link href="/terms-of-service" color="inherit" variant="body2">
          Contact us:
          
          <div style={{marginTop: "10px"}}>
          <FacebookIcon /> 
          <InstagramIcon />
          <TwitterIcon />
          </div>
        </Link>
        <Typography sx={{ marginLeft: "30px" }}>
          <Link href="/terms-of-service" color="inherit" variant="body2">
            Property of Team-Work:
            <p style={{margin: 0, padding: 0, textAlign: "left"}}>Zhanargul,Aibek,</p>
            <p style={{margin: 0, padding: 0, textAlign: "left"}}>Esen, Nurbek</p>
          </Link>
        </Typography>
      </Toolbar>
    </FooterContainer>
  );
};

export default Footer;
