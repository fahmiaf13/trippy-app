import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./userAction";

const initialState = {
  loading: false,
  data: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userLogin.pending]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
