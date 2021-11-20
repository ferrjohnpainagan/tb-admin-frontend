import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    SET_ALL_BOOKINGS: (state, action) => {
      state.bookings = action.payload;
    },
    UPDATE_ALL_BOOKINGS: (state, action) => {
      let newList = state.bookings.filter((booking: any) => {
        return booking.id !== action.payload.id;
      });

      state.bookings = [...newList, action.payload];
    },
  },
});

export default bookingSlice;
