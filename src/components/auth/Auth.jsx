import { CheckBox } from "@mui/icons-material";
import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { authWithGoogle, register } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      await register(email, password);
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
          Sign up to on-line
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
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Button
          sx={{ marginTop: "30px", width: "40%", background: "#ff6347" }}
          variant="contained"
          onClick={() => authWithGoogle()}
        >
          Continue with Google
        </Button>
        <FormControl>
          <FormControlLabel
            control={<CheckBox />}
            label="Remember me"
            sx={{ marginTop: "30px", color: "white" }}
          />
        </FormControl>
      </Grid>
    </>
  );
};

export default Auth;
