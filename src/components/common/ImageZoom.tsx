import { Dialog, Box } from "@mui/material";
import { useState } from "react";
import { ImageZoomDialog } from "./ImageZoomDialog";

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
      <ImageZoomDialog open={open} onClose={() => setOpen(false)} src={src} />
    </>
  );
};

export default ImageZoom;
