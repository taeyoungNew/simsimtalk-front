import { createSlice } from "@reduxjs/toolkit";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface LoadingState {
  count: number;
  error: null | Error;
}

const loadingInitialState: LoadingState = {
  count: 0,
  error: {
    status: 0,
    errorCode: "",
    message: "",
  },
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState: loadingInitialState,
  reducers: {
    startLoading: (state) => {
      state.count += 1;
    },
    stopLoading: (state) => {
      state.count = Math.max(0, state.count - 1);
    },
    resetLoading: (state) => {
      state.count = 0;
    },
  },
});

export const { startLoading, stopLoading, resetLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
