import { getSocket } from ".";
import { useAppDispatch } from "../store/hook";
import { messageThunk } from "../store/message/messageThunk";

interface SendMessage {
  chatRoomId: string;
  content: string;
  contentType: "TEXT" | "FILE" | "SYSTEM" | "IMAGE";
}
interface ReceiveMessage {
  chatRoomId: string;
  content: string;
  contentType: "TEXT" | "FILE" | "SYSTEM" | "IMAGE";
  senderId: string;
}

export const receiveMessage = async (params: ReceiveMessage) => {
  const dispatch = useAppDispatch();
  await dispatch(messageThunk(params));
};

export const joinChatRoom = (chatRoomId: string) => {
  const socket = getSocket();
  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("joinChatRoom", { chatRoomId });
};

export const sendMessageEvent = (props: SendMessage) => {
  const socket = getSocket();
  const chatRoomId = props.chatRoomId;
  const content = props.content;
  const contentType = props.contentType;
  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("sendMessage", {
    chatRoomId,
    content,
    contentType,
  });
};
