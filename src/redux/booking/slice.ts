import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    SET_ALL_BOOKINGS: (state, action) => {
      state.bookings = action.payload;
    },
    ADD_BOOKING: (state, action) => {
      state.bookings = [...state.bookings, action.payload];
    },
    UPDATE_ALL_BOOKINGS: (state, action) => {
      let newList = state.bookings.filter((booking: any) => {
        return booking.id !== action.payload.id;
      });

      state.bookings = [...newList, action.payload];
    },
    DELETE_BOOKING: (state, action) => {
      let newList = state.bookings.filter((booking: any) => {
        return booking.id !== action.payload;
      });

      state.bookings = [...newList];
    },
  },
});

export default bookingSlice;
