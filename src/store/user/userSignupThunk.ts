import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupAPI } from "../../apis/signup";

interface SignupData {
  email: string;
  password: string;
  username: string;
  nickname: string;
  aboutMe?: string;
  age?: number;
}
interface Error {
  status: number;
  errorCode: string;
  message: string;
}

export const signupUserThunk = createAsyncThunk<
  { message: string },
  SignupData,
  { rejectValue: Error }
>("user/signup", async (signupData, thunkAPI) => {
  try {
    const signupResult = await signupAPI(signupData);
    return { message: signupResult.data.message };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
