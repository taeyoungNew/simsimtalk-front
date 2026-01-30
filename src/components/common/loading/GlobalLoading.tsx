import { Backdrop, CircularProgress, Box } from "@mui/material";
import { theme } from "../../../theme/theme";
import type { RootState } from "../../../store";
import { useAppSelector } from "../../../store/hook";

interface GlobalLoadingProps {
  open?: boolean;
  zIndex?: number;
}
const GlobalLoading = ({ open, zIndex = 1300 }: GlobalLoadingProps) => {
  const loadingCnt = useAppSelector(
    (state: RootState) => state.LoadingSlice.count,
  );
  const isOpen = loadingCnt > 0;
  return (
    <Backdrop
      open={isOpen}
      sx={{
        color: "#fff",
        zIndex,
        backdropFilter: "blur(2px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <CircularProgress
          sx={{ color: theme.palette.chatCardColor.unreadBg }}
          size={48}
          thickness={4}
        />
      </Box>
    </Backdrop>
  );
};

export default GlobalLoading;
