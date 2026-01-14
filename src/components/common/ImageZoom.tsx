import { Dialog, Box } from "@mui/material";
import { useState } from "react";

type ImageZoomProps = {
  src: string;
  alt?: string;
};

const ImageZoom = ({ src, alt }: ImageZoomProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 썸네일 */}
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          cursor: "pointer",
          borderRadius: 1,
        }}
        onClick={() => setOpen(true)}
      />

      {/* 전체화면 줌 */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0,0,0,0.85)",
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
          }}
          onClick={() => setOpen(false)}
        >
          <Box
            component="img"
            src={src}
            alt={alt}
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default ImageZoom;
