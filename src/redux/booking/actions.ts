import { Dispatch } from "redux";
import { push, replace } from "connected-react-router";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
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
      bookingsList.push({ ...doc.data(), id: doc.id });
    });

    bookingsList = bookingsList.slice().sort((a: any, b: any) => {
      return +new Date(a.date) - +new Date(b.date);
    });

    dispatch(bookingSlice.actions.SET_ALL_BOOKINGS(bookingsList));
  } catch (error) {
    console.log(error);
  }
};

export const updateBooking =
  (data: IBookingItem) => async (dispatch: Dispatch) => {
    try {
      await setDoc(doc(db, "bookings", data.id), data);
      dispatch(bookingSlice.actions.UPDATE_ALL_BOOKINGS(data));
      dispatch(replace("/admin/booking#list"));
    } catch (error) {
      console.log(error);
    }
  };

export const deleteBooking = (id: string) => async (dispatch: Dispatch) => {
  try {
    await deleteDoc(doc(db, "bookings", id));
    dispatch(bookingSlice.actions.DELETE_BOOKING(id));
    dispatch(replace("/admin/booking#list"));
  } catch (error) {
    console.log(error);
  }
};
