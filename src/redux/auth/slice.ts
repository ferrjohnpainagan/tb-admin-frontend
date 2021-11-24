import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { initialState } from "./initialState";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_SIGNED_IN: (state, action: PayloadAction<boolean>) => {
      state.isSignedIn = action.payload;
    },
    SET_ADMIN_NAME: (state, action) => {
      state.adminName = action.payload;
    },
    SET_TOKEN: (state, action) => {
      state.token = action.payload;
    },
    SET_LOGIN_EXP: (state, action) => {
      state.loginExp = action.payload;
    },
  },
});

export default authSlice;
