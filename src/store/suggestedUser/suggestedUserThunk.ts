import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSuggestedUserAPI } from "../../apis/suggestedUser";
interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface UserInfo {
  userId: string;
  nickname: string;
  followerCnt: number;
  mutualFriendsCount: number;
}

interface getSuggestedUser {
  mutual: UserInfo[];
  popular: UserInfo[];
}
export const getSuggestedUserThunk = createAsyncThunk<
  getSuggestedUser,
  void,
  { rejectValue: Error }
>("getSuggestedUser/getAll", async (_, thunkAPI) => {
  try {
    const result = await getSuggestedUserAPI();
    return result.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
