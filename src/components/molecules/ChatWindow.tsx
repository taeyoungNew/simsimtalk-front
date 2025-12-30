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
import MaximizeIcon from "@mui/icons-material/Maximize";
import { useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { sendMessageEvemt } from "../../sockets/chatSocket";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch } from "../store/hook";
import { selectMessagesByRoom } from "../../store/message/messageSlice";

type SendMessagePayload = {
  chatRoomId: string;
  content: string;
  contentType: "TEXT" | "FILE" | "SYSTEM" | "IMAGE";
};

interface ChatWindowProps {
  chatRoomId: string;
  targetUserNickname: string;
  targetUserProfile: string;
  isActive: boolean;
}

export const ChatWindow = ({
  chatRoomId,
  targetUserNickname,
  targetUserProfile,
  isActive,
}: ChatWindowProps) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);
  const myId = useSelector((state: RootState) => state.User.id);
  const messages = dispatch(selectMessagesByRoom(chatRoomId));
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleEmojiSelect = (emoji: any) => {
    setMessage((prev) => prev + emoji.native); // 이모지 추가
  };
  const [isMinimized, setIsMinimized] = useState(false);

  const handleOpenFile = () => {
    fileInputRef.current?.click();
  };

  const minimizeChatWindow = () => {
    setIsMinimized((prev) => !prev);
  };

  const closeChatWindow = () => {
    console.log("채팅창닫기");
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const payment: SendMessagePayload = {
      chatRoomId,
      content: message,
      contentType: "TEXT",
    };
    sendMessageEvemt(payment);
    setMessage("");
  };

  return (
    <Box
      sx={{
        borderRadius: "10px 10px 0 0",
        position: "static",
        display: "flex",
        flexDirection: "column",
        right: "5%",
        bottom: 0,
        width: "18rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* header */}
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
            {targetUserNickname}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            component="div"
            onClick={minimizeChatWindow}
          >
            {!isMinimized ? (
              <MinimizeIcon
                sx={{
                  fontSize: "1.3rem",
                  marginRight: "0.4rem",
                  cursor: "pointer",
                  color: theme.palette.background.paper,
                }}
              />
            ) : (
              <MaximizeIcon
                sx={{
                  fontSize: "1.3rem",
                  marginRight: "0.4rem",
                  cursor: "pointer",
                  color: theme.palette.background.paper,
                }}
              ></MaximizeIcon>
            )}
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            component={"div"}
            onClick={closeChatWindow}
          >
            <CloseIcon
              sx={{
                fontSize: "1.3rem",
                cursor: "pointer",
                color: theme.palette.background.paper,
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: isMinimized ? "none" : "block",
        }}
      >
        <Box
          sx={{
            padding: "0.5rem",
            backgroundColor: theme.palette.background.paper,
            flexGrow: 4,
            height: "15rem",
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
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
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
            <IconButton
              onClick={sendMessage}
              sx={{ width: "2rem", height: "2rem" }}
            >
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
