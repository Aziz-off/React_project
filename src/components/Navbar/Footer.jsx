import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

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
        >
          🎥<b className="online">ON</b>-Line
        </IconButton>
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          © {new Date().getFullYear()} Makers
        </Typography>
        <Link href="/terms-of-service" color="inherit" variant="body2">
          Property of Team-Work
        </Link>
      </Toolbar>
    </FooterContainer>
  );
};

export default Footer;