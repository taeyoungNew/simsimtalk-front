import { Box, Button, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import { HeartIcon } from "../../assets/icons/Heart";
import { ChatDuotone } from "../../assets/icons/ChatDuotone";
import { CustomTextArea } from "../../components/atoms/inputs/CustomTextArea";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import {
  postLikeCencelThunk,
  postLikeThunk,
} from "../../store/like/postLikeThunk";
import { useAppDispatch } from "../../store/hook";
import { Controller, useForm } from "react-hook-form";
import EmojiPicker from "emoji-picker-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { modifyPostThunk } from "../../store/post/postDetailThunk";

interface PostDetailBodyProps {
  postId: number;
  content: string;
  likeCnt: number;
  commentCnt: number;
  isLiked?: boolean;
  isModifyPost: boolean;
  setIsModifyPost: Dispatch<SetStateAction<boolean>>;
}

interface ModifyPost {
  id: number;
  content: string;
}

export const PostDetailBody = ({
  postId,
  content,
  likeCnt,
  commentCnt,
  isLiked,
  isModifyPost,
  setIsModifyPost,
}: PostDetailBodyProps) => {
  const { control, handleSubmit, reset, watch, setValue, getValues } =
    useForm<ModifyPost>({
      defaultValues: {
        content: "",
      },
    });
  const emojiRef = useRef<HTMLDivElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const selectionRef = useRef<{ start: number; end: number }>({
    start: 0,
    end: 0,
  });
  const [emojiPos, setEmojiPos] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [openEmoji, setOpenEmoji] = useState(false);
  const dispatch = useAppDispatch();
  const emojiButtonRef = useRef<HTMLButtonElement | null>(null);
  const modifyPost = async (data: ModifyPost) => {
    const normalized = data.content.replace(/\n{2,}/g, "\n");
    const payment = {
      id: postId,
      content: normalized,
    };
    await dispatch(modifyPostThunk(payment));
    setOpenEmoji(false);
    setIsModifyPost(false);
  };
  const postLike = async () => {
    await dispatch(postLikeThunk(postId));
  };

  const deleteLike = async () => {
    await dispatch(postLikeCencelThunk(postId));
  };

  const handleEmojiToggle = () => {
    if (openEmoji) {
      setOpenEmoji(false);
      return;
    }

    const el = emojiButtonRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    setEmojiPos({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });

    setOpenEmoji(true);
  };
  const handleSelect = () => {
    const el = textAreaRef.current;
    if (!el) return;

    selectionRef.current = {
      start: el.selectionStart,
      end: el.selectionEnd,
    };
  };
  useEffect(() => {
    if (!openEmoji) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        emojiRef.current?.contains(target) ||
        emojiButtonRef.current?.contains(target)
      ) {
        return; // 내부 클릭 → 무시
      }

      setOpenEmoji(false); // 외부 클릭 → 닫기
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openEmoji]);

  return (
    <>
      <Typography
        sx={{
          color: (theme) => theme.palette.fontColor.normal,
          paddingTop: "0.4rem",
          paddingRight: "0.9rem",
          paddingLeft: "0.9rem",
        }}
        variant="h4"
      ></Typography>
      <Box
        sx={{
          padding: "1rem",
          height: "auto",
          minHeight: "40vh",
        }}
      >
        {isModifyPost === true ? (
          <form id="edit-post-form" onSubmit={handleSubmit(modifyPost)}>
            <Controller
              name="content"
              control={control}
              rules={{
                maxLength: {
                  value: 300,
                  message: "글자수를 300이하로 입력해주십시오",
                },
              }}
              render={({ field }) => {
                const handleEmojiSelect = (emoji: any) => {
                  const textarea = textAreaRef.current;
                  if (!textarea) return;

                  const { start, end } = selectionRef.current;
                  const value = textarea.value;
                  const emojiText = emoji.emoji;

                  const newValue =
                    value.slice(0, start) + emojiText + value.slice(end);

                  field.onChange(newValue); // ✅ 여기선 100% 정상

                  const nextCursor = start + emojiText.length;

                  requestAnimationFrame(() => {
                    textarea.focus();
                    textarea.setSelectionRange(nextCursor, nextCursor);
                    selectionRef.current = {
                      start: nextCursor,
                      end: nextCursor,
                    };
                  });
                };
                return (
                  <>
                    <CustomTextArea
                      minRows={5}
                      maxRows={10}
                      placeholder={content}
                      {...field}
                      ref={(el: HTMLTextAreaElement | null) => {
                        field.ref(el);
                        textAreaRef.current = el;
                      }}
                      onClick={handleSelect}
                      onKeyUp={handleSelect}
                      onFocus={handleSelect}
                      onChange={(e) => {
                        field.onChange(e);
                        handleSelect();
                      }}
                    />

                    {openEmoji && emojiPos && (
                      <Box
                        ref={emojiRef}
                        sx={{
                          position: "absolute",
                          top: emojiPos.top,
                          left: emojiPos.left,
                          zIndex: 100,
                        }}
                      >
                        <EmojiPicker
                          width={"19rem"}
                          height={"18rem"}
                          previewConfig={{ showPreview: false }}
                          searchDisabled
                          onEmojiClick={handleEmojiSelect}
                        />
                      </Box>
                    )}
                  </>
                );
              }}
            />
          </form>
        ) : (
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: (theme) => theme.palette.fontColor.main,
              whiteSpace: "pre-wrap",
            }}
          >
            {content}
          </Typography>
        )}
        {isModifyPost === true ? (
          <Box
            ref={emojiButtonRef}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={handleEmojiToggle}
              sx={{
                color: (theme) => theme.palette.fontColor.icon,
              }}
            >
              <TagFacesIcon></TagFacesIcon>
            </Button>
            <Button form="edit-post-form" type="submit">
              Submit
            </Button>
          </Box>
        ) : (
          <Box></Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.4rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {!isLiked ? (
            <Button onClick={() => postLike()}>
              <HeartIcon
                color={theme.palette.fontColor.icon}
                fillColor={theme.palette.background.paper}
                size={40}
              ></HeartIcon>
            </Button>
          ) : (
            <Button onClick={() => deleteLike()}>
              <HeartIcon
                color={theme.palette.background.paper}
                fillColor={theme.palette.fontColor.isLike}
                size={40}
              ></HeartIcon>
            </Button>
          )}
          <Typography
            color={theme.palette.fontColor.icon}
            sx={{ fontSize: "1.2em" }}
          >
            {likeCnt}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button>
            <ChatDuotone
              color={theme.palette.fontColor.icon}
              fillColor={theme.palette.background.paper}
              size={40}
            ></ChatDuotone>
          </Button>
          <Typography
            color={theme.palette.fontColor.icon}
            sx={{ fontSize: "1.2em" }}
          >
            {commentCnt}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
