import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
  },
});

export default authSlice;
