import { Dispatch } from "redux";
import { push, replace } from "connected-react-router";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

import { IAddBooking } from "../../interfaces";

export const addBooking = (data: IAddBooking) => async (dispatch: Dispatch) => {
  try {
    await addDoc(collection(db, "bookings"), data);
    dispatch(replace("/admin/booking#list"));

    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
