import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { NavLink, Outlet } from "react-router-dom";
import { ChatQuote } from "../../assets/icons/chatQuote";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{ bgcolor: (theme) => theme.palette.backGroungColor.main }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <NavLink to={"/"}>
              <Button sx={{ color: (theme) => theme.palette.fontColor.main }}>
                <Box sx={{ display: "flex", position: "relative" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      flexGrow: 1,
                      color: (theme) => theme.palette.fontColor.main,
                    }}
                  >
                    SimSimTalk
                    <ChatQuote classVal="chatQuete" size={18}></ChatQuote>
                  </Typography>
                </Box>
              </Button>
            </NavLink>
          </Box>
          <NavLink to={"/login"}>
            <Button
              color="inherit"
              sx={{ color: (theme) => theme.palette.fontColor.main }}
            >
              Login
            </Button>
          </NavLink>
          <NavLink to={"/signup"}>
            <Button
              color="inherit"
              sx={{ color: (theme) => theme.palette.fontColor.main }}
            >
              Signup
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Box>
        {/* <Toolbar></Toolbar>   */}
        <Outlet />
      </Box>
    </Box>
  );
}
