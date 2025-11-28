import {
  Box,
  Typography,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { theme } from "../../theme/theme";
import { CustomAvatar } from "../../assets/icons/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { ChatBox } from "../atoms/box/ChatBox";
import TelegramIcon from "@mui/icons-material/Telegram";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useRef, useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export const ChatWindow = () => {
  const [message, setMessage] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleEmojiSelect = (emoji: any) => {
    setMessage((prev) => prev + emoji.native); // 이모지 추가
  };

  const handleOpenFile = () => {
    console.log("handleOpenFile");

    fileInputRef.current?.click();
  };

  return (
    <Box
      sx={{
        borderRadius: "10px 10px 0 0",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        right: "5%",
        bottom: 1,
        width: "18rem",
        height: "20rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px 10px 0 0",
          backgroundColor: "#2563EB",
          padding: "0.5rem",
          display: "flex",
          flexGrow: 0.1,
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexGrow: "1" }}>
          <CustomAvatar
            sx={{ display: "flex", width: "1.5rem", marginRight: "0.2rem" }}
          />
          <Typography
            sx={{
              color: theme.palette.background.paper,
            }}
          >
            아이디
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MinimizeIcon
            sx={{
              fontSize: "1.3rem",
              marginRight: "0.4rem",
              cursor: "pointer",
              color: theme.palette.background.paper,
            }}
          />
          <CloseIcon
            sx={{
              fontSize: "1.3rem",
              cursor: "pointer",
              color: theme.palette.background.paper,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          padding: "0.5rem",
          backgroundColor: theme.palette.background.paper,
          flexGrow: 4,
        }}
      >
        <Box
          sx={{
            marginTop: "0.5rem",
            left: 1,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <ChatBox content={"하이요"} isMyChat={false} />
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "0.5rem",
            right: 1,
            justifyContent: "flex-end",
          }}
        >
          <ChatBox content={"하이요"} isMyChat={true} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          flexGrow: 0.5,
          padding: "0.5rem",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <IconButton
            sx={{ width: "2rem", height: "2rem" }}
            onClick={() => handleOpenFile()}
          >
            <AttachFileIcon
              sx={{
                color: theme.palette.fontColor.icon,
              }}
            />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            startAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setOpenEmoji((prev) => !prev)}>
                  <TagFacesIcon sx={{ cursor: "pointer" }} />
                </IconButton>
              </InputAdornment>
            }
            disableUnderline
            sx={{
              width: "100%",
              border: "1px solid black",
              borderRadius: "40px",
            }}
            inputProps={{
              style: {
                fontSize: "0.8rem",
                padding: "0.5rem",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <IconButton sx={{ width: "2rem", height: "2rem" }}>
            <TelegramIcon
              sx={{
                cursor: "pointer",
                fontSize: "1.5rem",
                color: theme.palette.fontColor.icon,
              }}
            />
          </IconButton>
        </Box>
      </Box>

      {/* hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => console.log("FILE:", e.target.files?.[0])}
      />

      {/* 이모지 피커 팝업 */}
      {openEmoji && (
        <Box
          sx={{
            position: "absolute",
            bottom: "50px",
            left: 0,
            zIndex: 100,
          }}
        >
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </Box>
      )}
    </Box>
  );
};
