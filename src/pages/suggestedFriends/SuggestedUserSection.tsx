import { Box, Typography } from "@mui/material";
import { UserCard } from "../../components/atoms/card/UserCard";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { theme } from "../../theme/theme";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useEffect, useRef } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { EmptyState } from "../../components/common/empty/EmptyState";
import { BaseEmptyState } from "../../components/common/empty/BaseEmptyState";
interface UserInfo {
  userId: string;
  nickname: string;
  followerCnt: number;
  mutualFriendsCount: number;
  isFollowinged: boolean;
}
interface SuggestedFriendsPageProps {
  suggestedUsers: UserInfo[];
  sectionType: "suggest" | "popular";
}

export const SuggestedUserSection = ({
  sectionType,
  suggestedUsers,
}: SuggestedFriendsPageProps) => {
  let title;
  switch (sectionType) {
    case "popular":
      title = "인기유저";
      break;
    case "suggest":
      title = "알수도 있는사람";
      break;
  }
  const icon = () => {
    switch (sectionType) {
      case "suggest":
        return (
          <PeopleAltOutlinedIcon
            sx={{
              fontSize: "1.6rem",
              color: theme.palette.userCardColor.icon.suggest,
            }}
          />
        );
      case "popular":
        return (
          <StarRateIcon
            sx={{
              fontSize: "1.6rem",
              color: theme.palette.userCardColor.icon.popular,
            }}
          />
        );
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        padding: "1rem",
        flexDirection: "column",
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Box sx={{ display: "flex", gap: 0.1, alignItems: "center" }}>
        {icon()}
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: theme.palette.userCardColor.text.title,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          overflow: "scroll",
          scrollbarWidth: "1px",
          minWidth: 0,
          gap: 2,
          padding: "1rem 0",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {suggestedUsers.length > 0 ? (
          suggestedUsers.map((el, index) => {
            return (
              <Box key={index} sx={{ flexShrink: 0 }}>
                <UserCard
                  userId={el.userId}
                  nickname={el.nickname}
                  followerCnt={el.followerCnt}
                  mutualFriendsCount={el.mutualFriendsCount}
                  sectionType={sectionType}
                  isFollowinged={el.isFollowinged}
                />
              </Box>
            );
          })
        ) : (
          <BaseEmptyState
            title={"아직 새로운 친구를 찾지 못했어요"}
            description={"좀더 활동을 해볼까요"}
            titleSize={0.7}
            descriptionSize={0.7}
          />
        )}
      </Box>
    </Box>
  );
};
