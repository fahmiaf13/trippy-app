import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalPost } from "../../utilities/fetch";
import { FIREBASE_LOGIN } from "../../constant/auth";
import { REACT_APP_API_KEY } from "../../constant/key";

export const userLogin = createAsyncThunk("user/login", async (FormData, thunkAPI) => {
  try {
    const response = await GlobalPost({
      url: FIREBASE_LOGIN + REACT_APP_API_KEY,
      data: FormData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  } catch (error) {
    console.log("error", error);
    thunkAPI.rejectWithValue(error);
  }
});
