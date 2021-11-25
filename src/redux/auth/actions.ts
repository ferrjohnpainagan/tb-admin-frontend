import { Dispatch } from "redux";
import { provider, auth, app } from "../../services/firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import moment from "moment";
import jwtDecode from "jwt-decode";

import authSlice from "./slice";
import * as helper from "../../utils/helper";

let now = moment(new Date());

export const getRegisteredAdmin = () => async () => {
  try {
    let response = await getAuth(app);
  } catch (error) {}
};

export const signInAdmin =
  (data: { email: string; password: string }) => async (dispatch: Dispatch) => {
    try {
      let response: any = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      let tokenObj = jwtDecode(response.user.accessToken) as any;
      let ms = moment.duration(tokenObj.exp, "milliseconds");
      let expDate = now
        .add(ms.hours(), "hours")
        .format("MM/DD/YYYY hh:mm:ss a");

      dispatch(authSlice.actions.SET_SIGNED_IN(true));
      dispatch(authSlice.actions.SET_TOKEN(response.user.accessToken));
      dispatch(authSlice.actions.SET_LOGIN_EXP(expDate));
      dispatch(authSlice.actions.SET_ADMIN_NAME(response.user.email));
      return { data: response, success: true };
    } catch (error) {
      return { data: error, success: false };
    }
  };

export const signOutAdmin = () => (dispatch: Dispatch) => {
  try {
    signOut(auth);
    dispatch(authSlice.actions.SET_SIGNED_IN(false));
    dispatch(authSlice.actions.SET_TOKEN(null));
    dispatch(authSlice.actions.SET_LOGIN_EXP(new Date()));
    window.location.replace("/admin/auth");
  } catch (error) {}
};
