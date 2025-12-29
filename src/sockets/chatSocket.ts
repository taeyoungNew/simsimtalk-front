import { getSocket } from ".";

interface SendMessage {
  chatRoomId: string;
  content: string;
  contentType: "TEXT" | "FILE" | "SYSTEM" | "IMAGE";
}

export const joinChatRoom = (chatRoomId: string) => {
  const socket = getSocket();
  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("joinChatRoom", { chatRoomId });
};

export const sendMessageEvemt = (props: SendMessage) => {
  const socket = getSocket();
  const chatRoomId = props.chatRoomId;
  const content = props.content;
  const contentType = props.contentType;
  // const receiverId = props.receiverId;
  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("sendMessage", {
    chatRoomId,
    content,
    contentType,
    // receiverId,
  });
};

export const receiveMessage = () => {
  const socket = getSocket();
  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.on("receiveMessage", (param) => {
    console.log("메세지도착", param);
  });
};
