import { Box, Button, Menu, MenuItem, SxProps } from "@mui/material";
import { CustomAvatar } from "../../assets/icons/Avatar";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { DynamicCustomButton } from "../atoms/buttons/DynamicCustomButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { theme } from "../../theme/theme";
import { useAppDispatch } from "../../store/hook";
import { chatThunk } from "../../store/chat/chatThunk";

interface AvatarMenuProps {
  id: number;
  userId: string;
  userNickname: string;
  isLiked: boolean;
  sx?: SxProps;
  isOnline?: boolean;
  isMy?: boolean;
  to: string;
}

export const AvatarMenu = ({
  sx,
  isOnline,
  isMy,
  userId,
  userNickname,
}: AvatarMenuProps) => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const prevPathName = location.pathname;

  const isMenuBlock =
    location.pathname.startsWith("/userPage") ||
    location.pathname.startsWith("/myPage");

  const isMyPage = isMy ? true : false;
  const detailPostLinkPath = isMy ? `/myPage` : `/userPage/${userId}`;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!isMenuBlock) setAnchorEl(event.currentTarget);
  };
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClose = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setAnchorEl(null);
    buttonRef.current?.focus();
  };

  const openChatWindow = async (e: { currentTarget: HTMLElement }) => {
    setAnchorEl(null);

    setTimeout(() => {
      dispatch(
        chatThunk({ targetUserId: userId, targetUserNickname: userNickname }),
      );
    }, 0);
  };
  return (
    <Box>
      <Box
        onClick={(event) => handleClick(event)}
        sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <CustomAvatar sx={sx} isOnline={isOnline} />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        disableRestoreFocus
      >
        <MenuItem onClick={handleClose}>
          <NavLink
            to={detailPostLinkPath}
            state={{ myPage: isMyPage, prevPathName }}
            style={{ color: "black", textDecorationLine: "none" }}
          >
            <DynamicCustomButton
              color={theme.palette.fontColor.normal}
              icon={<PersonOutlineIcon />}
              title={"profile"}
              paddingX="0"
              paddingY="0"
            />
          </NavLink>
        </MenuItem>
        {isMy ? (
          <Box></Box>
        ) : (
          <MenuItem onClick={openChatWindow}>
            <DynamicCustomButton
              icon={<ChatBubbleOutlineIcon />}
              color={theme.palette.fontColor.main}
              title={"chatting"}
              paddingX="0"
              paddingY="0"
            ></DynamicCustomButton>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};
