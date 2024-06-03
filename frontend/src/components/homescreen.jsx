import React, { useState } from "react";
import Grid from "@mui/material/Grid/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import homePageImage from "../images/soil.jpg";
import Leaf from "../images/Leaf.jpg";
import { TextField, Button, Divider, Chip } from "@mui/material";

export const LogInScreen = ({ signInUser, logInUser }) => {
  const [showLoginId, setShowLoginId] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginId, setLoginId] = useState('');

  const SignInNewUser = (e) => {
    e.preventDefault();
    if (userName.trim() && password.trim() && loginId.trim() && firstName.trim() && lastName.trim()) {
      signInUser(userName, password, loginId, firstName, lastName);
      setUserName("");
      setPassword("");
      setLoginId("");
      setFirstName("");
      setLastName("");
    };
  };

  const LogInUser = (e) => {
    e.preventDefault();
    if (userName.trim() && password.trim()) {
      logInUser(userName, password)
      setUserName("");
      setPassword("");
      setLoginId("");
    };
  };

  const handleNewUser = () => {
    setShowLoginId(true);
  };

  return (
    <Grid container disableGutters sx={{ height: "100vh", width: "100vw" }}>
      <Grid
        item
        xs={false}
        sm={8}
        md={7}
        sx={{
          backgroundImage: `url(${homePageImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={15} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            marginLeft: "100px",
            height: "100%", // Ensure the box takes up full height
          }}
        >
          <img src={Leaf} alt="Logo" style={{ width: "300px", alignSelf: "flex-start" }} />
          {showLoginId && (
            <TextField
              margin="normal"
              required
              sx={{ width: "350px" }} // Adjust the width as needed
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="firstname"
              onChange={(e) => setFirstName(e.target.value)}
              autoFocus
            />
          )}
          {showLoginId && (
            <TextField
              margin="normal"
              required
              sx={{ width: "350px" }} // Adjust the width as needed
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
              onChange={(e) => setLastName(e.target.value)}
              autoFocus
            />
          )}
          <TextField
            margin="normal"
            required
            sx={{ width: "350px" }} // Adjust the width as needed
            id="username"
            label="User Name"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
            autoFocus
          />
          {showLoginId && (
            <TextField
              margin="normal"
              required
              sx={{ width: "350px" }} // Adjust the width as needed
              id="loginid"
              label="Login Id"
              name="loginid"
              autoComplete="username"
              onChange={(e) => setLoginId(e.target.value)}
              autoFocus
            />
          )}
          <TextField
            margin="normal"
            required
            sx={{ width: "350px" }} // Adjust the width as needed
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Divider sx={{ width: "350px" }} margin="normal" onClick={handleNewUser}>New User</Divider>
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "350px" }}>
            {!showLoginId && (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ width: "100px", bgcolor: "green", color: "white", textTransform: "none" }}
                onClick={LogInUser}
              >
                Log In
              </Button>
            )}
            <Button
              fullWidth
              variant="outlined"
              sx={{ width: "100px", borderColor: "green", color: "green", textTransform: "none" }}
              onClick={SignInNewUser}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
