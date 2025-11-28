import { Box, Button, Menu, MenuItem, SxProps } from "@mui/material";
import { CustomAvatar } from "../../assets/icons/Avatar";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { DynamicCustomButton } from "../atoms/buttons/DynamicCustomButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { theme } from "../../theme/theme";

interface AvatarMenuProps {
  id: number;
  userId: string;
  isLiked: boolean;
  sx?: SxProps;
  isOnline?: boolean;
  isMy?: boolean;
  to: string;
}

export const AvatarMenu = ({ sx, isOnline, isMy, userId }: AvatarMenuProps) => {
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
  const handleClose = () => {
    setAnchorEl(null);
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
          <MenuItem onClick={handleClose}>
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
