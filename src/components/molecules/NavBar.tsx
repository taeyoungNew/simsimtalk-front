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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { NavSearchInput } from "../atoms/inputs/NavSearchInput";
import { CustomAvatar } from "../../assets/icons/Avatar";

import { logoutThunk } from "../../store/auth/authThunk";
import { useEffect } from "react";
import { selectUnreadAlramCnt } from "../../store/messageAlram/messageAlramSelector";

export default function NavBar() {
  const isLogin = useSelector((state: RootState) => state.User.isLogin);
  const userId = useSelector((state: RootState) => state.User.id);
  const alramList = useSelector(
    (state: RootState) => state.MessageAlramSlice.alarmsByRoom,
  );
  let alramCnt = useSelector(selectUnreadAlramCnt);
  const [showAlramAnchorEl, setShowAlramAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const prevPathName = location.pathname;
  const dispatch = useAppDispatch();
  const menuId = "primary-search-account-menu";
  const [_, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(showAlramAnchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = async () => {
    const keepUserId = userId;
    await dispatch(logoutThunk({ userId: keepUserId }));
  };

  const showAlrams = async (event: React.MouseEvent<HTMLElement>) => {
    setShowAlramAnchorEl(event.currentTarget);
  };
  const closeAlrams = async () => {
    setShowAlramAnchorEl(null);
  };

  useEffect(() => {
    console.log("useEffect", alramList);
  }, [alramList]);

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
                onClick={showAlrams}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge
                  badgeContent={alramCnt > 0 ? alramCnt : undefined}
                  color="error"
                >
                  <NotificationsNoneIcon
                    sx={{ color: (theme) => theme.palette.fontColor.icon }}
                  />
                </Badge>
              </IconButton>
              <Menu
                id="fade-menu"
                slotProps={{
                  list: {
                    "aria-labelledby": "fade-button",
                  },
                }}
                slots={{ transition: Fade }}
                anchorEl={showAlramAnchorEl}
                open={open}
                onClose={closeAlrams}
              >
                <MenuItem onClick={closeAlrams}>Profile</MenuItem>
                <MenuItem onClick={closeAlrams}>My account</MenuItem>
                <MenuItem onClick={closeAlrams}>Logout</MenuItem>
              </Menu>
              <NavLink to={`/myPage`} state={{ myPage: true, prevPathName }}>
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
