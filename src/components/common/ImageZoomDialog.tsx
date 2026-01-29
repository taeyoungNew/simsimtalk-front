import { Box, Dialog } from "@mui/material";

interface ImgageZoomDialog {
  open: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
}

export const ImageZoomDialog = ({
  open,
  onClose,
  src,
  alt,
}: ImgageZoomDialog) => {
  return (
    <>
      {/* 전체화면 줌 */}
      <Dialog
        open={open}
        onClose={onClose}
        fullScreen
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0,0,0,0.85)",
          },
        }}
        sx={{}}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
            zIndex: 2000,
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
          onClick={onClose}
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
