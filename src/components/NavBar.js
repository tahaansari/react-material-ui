import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" flexGrow="1">
            Hello World!!
          </Typography>
          <Button variant="text" color="inherit" startIcon={<LoginIcon />}>
            Login
          </Button>
          <Button variant="text" color="inherit" endIcon={<LogoutIcon />}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
