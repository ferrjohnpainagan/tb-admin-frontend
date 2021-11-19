import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
});

export default bookingSlice;
