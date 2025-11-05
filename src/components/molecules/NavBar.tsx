import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import { ChatQuote } from "../../assets/icons/ChatQuote";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Badge from "@mui/material/Badge/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "../../store/hook";
import { deleteAuth } from "../../store/auth/authSlice";
import { logoutAPI } from "../../apis/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { resetLiked } from "../../store/post/allPostsSlice";
import { NavSearchInput } from "../atoms/inputs/NavSearchInput";
import { CustomAvatar } from "../../assets/icons/Avatar";

export default function NavBar() {
  const isLogin = useSelector((state: RootState) => state.User.isLogin);
  const userId = useSelector((state: RootState) => state.User.id);

  const dispatch = useAppDispatch();
  const menuId = "primary-search-account-menu";
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = async () => {
    dispatch(resetLiked());
    dispatch(deleteAuth());
    await logoutAPI();
    alert("로그아웃되었습니다.");
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: (theme) => theme.palette.background.paper,
          }}
        >
          <Box sx={{}}>
            <NavLink to={"/"}>
              <Button
                sx={{ color: (theme) => theme.palette.primary.contrastText }}
              >
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
          <Box sx={{ color: (theme) => theme.palette.primary.main }}>
            <form action="" method="post">
              <NavSearchInput></NavSearchInput>
            </form>
          </Box>

          {isLogin === true ? (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" aria-label="show 4 new mails">
                <Badge badgeContent={4} color="error">
                  <MailOutlineIcon
                    sx={{ color: (theme) => theme.palette.fontColor.icon }}
                  />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsNoneIcon
                    sx={{ color: (theme) => theme.palette.fontColor.icon }}
                  />
                </Badge>
              </IconButton>
              <NavLink to={`/myPage`} state={{ myPage: true }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <CustomAvatar sx={{ width: "2rem" }}></CustomAvatar>
                </IconButton>
              </NavLink>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={logout}
                color="inherit"
              >
                <LogoutIcon
                  sx={{ color: (theme) => theme.palette.fontColor.icon }}
                />
              </IconButton>
            </Box>
          ) : (
            <Box>
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
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
