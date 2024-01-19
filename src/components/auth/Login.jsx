import React, { useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";

const Login = () => {
  const { user, logIn } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async () => {
    try {
      await logIn(email, password);
    } catch (error) {
      setError(error.message);
    }
	navigate('/')
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        // flexDirection="column"
        // marginTop="200px"
        alignItems="center"
        minHeight="100vh"
      >
        {error && <Alert severity="error">{error}</Alert>}
        <Typography
          sx={{
            fontFamily: "sans-serif",
            letterSpacing: "2px",
            fontSize: "32px",
            marginBottom: "20px",
            color: "white",
          }}
        >
          Sign in to ON-Line
        </Typography>
        <TextField
          sx={{
            marginTop: "30px",
            width: "40%",
            backgroundColor: "grey",
            borderRadius: "10px",
            opacity: "0.6",
          }}
          label="email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{
            marginTop: "30px",
            width: "40%",
            backgroundColor: "grey",
            borderRadius: "10px",
            opacity: "0.6",
          }}
          label="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={{ marginTop: "30px", width: "40%", background: "#ff6347" }}
          variant="contained"
          onClick={handleLoginSubmit}
        >
          Sign In
        </Button>
        <div style={{ marginTop: "15px", color: "white", }}>
          Do not have an account? 
          <Link to={"/auth"} style={{marginLeft: "10px", color: "lightblue"}}> Sign Up</Link>
        </div>
      </Grid>
    </>
  );
};

export default Login;