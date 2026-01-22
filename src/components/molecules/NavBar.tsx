import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { ChatQuote } from "../../assets/icons/ChatQuote";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Badge from "@mui/material/Badge/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "../../store/hook";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { NavSearchInput } from "../atoms/inputs/NavSearchInput";
import { CustomAvatar } from "../../assets/icons/Avatar";

import { logoutThunk } from "../../store/auth/authThunk";
import {
  selectUnreadMsgAlarmCnt,
  selectUnreadMsgAlarms,
} from "../../store/messageAlarm/messageAlarmSelector";
import MessasgeAlarmItem from "../atoms/alram/MessageAlramItem";
import AlarmItem from "../atoms/alram/AlramItem";
import {
  selectAlarms,
  selectUnreadAlarmCount,
} from "../../store/alarm/alarmSelector";

export default function NavBar() {
  const isLogin = useSelector((state: RootState) => state.User.isLogin);
  const userId = useSelector((state: RootState) => state.User.id);
  let msgAlarmCnt = useSelector(selectUnreadMsgAlarmCnt);
  let msgAlarms = useSelector(selectUnreadMsgAlarms);
  let alarmCnt = useSelector(selectUnreadAlarmCount);
  let alarms = useSelector(selectAlarms);
  const navigate = useNavigate();

  const [showMsgalarmAnchorEl, setShowMsgalarmAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [showAlarmAnchorEl, setShowAlarmAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const prevPathName = location.pathname;
  const dispatch = useAppDispatch();
  const menuId = "primary-search-account-menu";
  const [_, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const msgListOpen = Boolean(showMsgalarmAnchorEl);
  const alarmOpen = Boolean(showAlarmAnchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = async () => {
    const keepUserId = userId;
    await dispatch(logoutThunk({ userId: keepUserId }));
  };

  const showMsgAlarms = async (event: React.MouseEvent<HTMLElement>) => {
    if (msgAlarms.length > 0) setShowMsgalarmAnchorEl(event.currentTarget);
  };
  const closeMsgAlarms = async () => {
    setShowMsgalarmAnchorEl(null);
  };
  const showAlarms = async (event: React.MouseEvent<HTMLElement>) => {
    setShowAlarmAnchorEl(event.currentTarget);
  };
  const closeAlarms = async () => {
    setShowAlarmAnchorEl(null);
  };
  const suggetedPage = () => {
    navigate("/suggestedFriendsPage");
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
            // 알람
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                onClick={suggetedPage}
                size="large"
                aria-label="show 4 new mails"
              >
                <PeopleAltOutlinedIcon
                  sx={{ color: (theme) => theme.palette.fontColor.icon }}
                />
              </IconButton>

              <IconButton
                onClick={showAlarms}
                size="large"
                aria-label="show 4 new mails"
              >
                <Badge badgeContent={alarmCnt} color="error">
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
                    disablePadding: true,
                  },
                  paper: {
                    sx: {
                      width: "19rem", // ⭐ 메뉴 전체 폭
                      maxHeight: "14rem", // 스크롤 대비
                    },
                  },
                }}
                slots={{ transition: Fade }}
                anchorEl={showAlarmAnchorEl}
                open={alarmOpen}
                onClose={closeAlarms}
              >
                {alarms.map((el, index) => {
                  return (
                    <AlarmItem
                      key={index}
                      id={el.id}
                      senderId={el.senderId}
                      receiverId={el.receiverId}
                      targetId={el.targetId}
                      targetType={el.targetType}
                      alarmType={el.alarmType}
                      isRead={el.isRead}
                      createdAt={el.createdAt}
                      senderNickname={el.senderNickname}
                    />
                  );
                })}
              </Menu>
              {/* 메세지알람 */}
              <IconButton
                sx={{ position: "relative" }}
                onClick={showMsgAlarms}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge
                  badgeContent={msgAlarmCnt > 0 ? msgAlarmCnt : undefined}
                  color="error"
                >
                  <MailOutlineIcon
                    sx={{ color: (theme) => theme.palette.fontColor.icon }}
                  />
                </Badge>
              </IconButton>
              <Menu
                id="fade-menu"
                slotProps={{
                  list: {
                    "aria-labelledby": "fade-button",
                    disablePadding: true,
                  },
                  paper: {
                    sx: {
                      width: "16rem", // ⭐ 메뉴 전체 폭
                      maxHeight: "14rem", // 스크롤 대비
                    },
                  },
                }}
                slots={{ transition: Fade }}
                anchorEl={showMsgalarmAnchorEl}
                open={msgListOpen}
                onClose={closeMsgAlarms}
              >
                {msgAlarms.map((el, index) => {
                  return (
                    <MessasgeAlarmItem
                      key={index}
                      chatRoomId={el.chatRoomId}
                      content={el.content}
                      contentType={el.contentType}
                      senderId={el.senderId}
                      senderNickname={el.senderNickname}
                    />
                  );
                })}
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
