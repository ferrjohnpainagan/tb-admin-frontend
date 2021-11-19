import { Dispatch } from "redux";
import { push, replace } from "connected-react-router";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

import bookingSlice from "./slice";
import { IAddBooking, IBookingItem } from "../../interfaces";

export const addBooking = (data: IAddBooking) => async (dispatch: Dispatch) => {
  try {
    await addDoc(collection(db, "bookings"), data);
    dispatch(replace("/admin/booking#list"));

    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export const getAllBookings = () => async (dispatch: Dispatch) => {
  try {
    const response = await getDocs(collection(db, "bookings"));

    let bookingsList: any[] = [];
    response.forEach((doc) => {
      bookingsList.push(doc.data());
    });
    dispatch(bookingSlice.actions.SET_ALL_BOOKINGS(bookingsList));
  } catch (error) {}
};
