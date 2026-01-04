export type MessageType = "TEXT" | "IMAGE" | "FILE" | "SYSTEM";

export const getMessageTypeFormFile = (file: File): MessageType => {
  if (file.type.startsWith("image/")) {
    return "IMAGE";
  }

  return "FILE";
};
