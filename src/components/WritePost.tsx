import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { CustomTextArea } from "./atoms/inputs/CustomTextArea";
import VideocamIcon from "@mui/icons-material/Videocam";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useForm, Controller } from "react-hook-form";
import { createPostThunk } from "../store/post/allPostsThunk";
import { useAppDispatch } from "../store/hook";
import { CustomAvatar } from "../assets/icons/Avatar";
interface WritePost {
  content: string;
}

export const WritePost = () => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, reset } = useForm<WritePost>({
    defaultValues: {
      content: "",
    },
  });
  const writePost = async (data: WritePost) => {
    const normalized = data.content.replace(/\n{2,}/g, "\n");

    await dispatch(createPostThunk(normalized));
    reset();
  };

  const imoge = () => {
    console.log("이모지");
  };

  const live = () => {
    console.log("live");
  };

  return (
    <form onSubmit={handleSubmit(writePost)}>
      <Box
        sx={{
          borderRadius: "10px",
          backgroundColor: (theme) => theme.palette.background.paper,
          padding: "1rem",
          width: "inherit",
          marginBottom: "0.5rem",
          display: "flex",
        }}
      >
        <Box sx={{ padding: "0", marginRight: "0.8rem" }}>
          <CustomAvatar sx={{ width: "2.5rem" }} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              marginBottom: "0.5rem",
              borderRadius: "8px",
              padding: "0.8rem",
              width: "inherit",
              background: (theme) => theme.palette.background.default,
            }}
          >
            <Controller
              name="content"
              control={control}
              rules={{
                maxLength: {
                  value: 300,
                  message: "글자수를 300이하로 입력해주십시오",
                },
              }}
              render={({ field }) => (
                <CustomTextArea {...field}></CustomTextArea>
              )}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "felx", alignItems: "center" }}>
              <Button
                onClick={live}
                sx={{ color: (theme) => theme.palette.fontColor.icon }}
              >
                <VideocamIcon></VideocamIcon>
              </Button>
              <Button
                onClick={imoge}
                sx={{ color: (theme) => theme.palette.fontColor.icon }}
              >
                <TagFacesIcon></TagFacesIcon>
              </Button>
            </Box>
            <Button type="submit">게시</Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
