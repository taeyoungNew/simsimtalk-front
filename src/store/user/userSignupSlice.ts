import { createSlice } from "@reduxjs/toolkit";
import { signupUserThunk } from "./userSignupThunk";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface SignupInitialState {
  isLoading: boolean;
  success: boolean;
  successMessage: string;
  error: null | Error;
}

const signupUserInitialState: SignupInitialState = {
  isLoading: false,
  success: false,
  successMessage: "",
  error: null || {
    status: 0,
    errorCode: "",
    message: "",
  },
};

export const signupSlice = createSlice({
  name: "user/signup",
  initialState: signupUserInitialState,

  reducers: {
    resetSignupError: (state) => {
      state.error = null;
    },
    resetInit: (state) => {
      state.success = false;
      state.successMessage = "";
      state.error = null;
    },
  },
  extraReducers: async (builder) => {
    builder
      .addCase(signupUserThunk.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(signupUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.successMessage = action.payload?.message;
      })
      .addCase(signupUserThunk.rejected, (state, action) => {
        (state.isLoading = false), (state.success = false);
        state.successMessage = "";
        state.error = action.payload as Error;
      });
  },
});

export const { resetInit, resetSignupError } = signupSlice.actions;
export default signupSlice.reducer;
