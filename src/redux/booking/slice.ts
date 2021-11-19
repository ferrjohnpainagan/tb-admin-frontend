import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    SET_ALL_BOOKINGS: (state, action) => {
      state.bookings = action.payload;
    },
  },
});

export default bookingSlice;
