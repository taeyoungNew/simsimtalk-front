import {
  followingCencelThunk,
  followingThunk,
} from "../../store/follow/followThunk";
import { useAppDispatch } from "../../store/hook";

interface FollowType {
  followId: string;
  isMyPage: boolean;
  followingNickname: string;
}

export const following = async ({
  followId,
  followingNickname,
  isMyPage,
}: FollowType) => {
  const dispatch = useAppDispatch();
  await dispatch(
    followingThunk({
      followId,
      isMyPage,
      followingNickname,
    }),
  );
};

export const followingCencel = async ({
  followId,
  followingNickname,
  isMyPage,
}: FollowType) => {
  const dispatch = useAppDispatch();
  await dispatch(
    followingCencelThunk({
      followId,
      isMyPage,
      followingNickname,
    }),
  );
};
