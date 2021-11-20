import { Dispatch } from "redux";
import { provider, auth, app } from "../../services/firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import authSlice from "./slice";

import * as helper from "../../utils/helper";

// const auth = getAuth();

export const getRegisteredAdmin = () => async () => {
  try {
    let response = await getAuth(app);
  } catch (error) {}
};

export const signInAdmin =
  (data: { email: string; password: string }) => async (dispatch: Dispatch) => {
    try {
      let response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      dispatch(authSlice.actions.SET_SIGNED_IN(true));
      dispatch(
        authSlice.actions.SET_ADMIN_NAME(
          helper.handleDisplayName(response.user.email)
        )
      );
      return { data: response, success: true };
    } catch (error) {
      return { data: error, success: false };
    }
  };

export const signOutAdmin = () => (dispatch: Dispatch) => {
  try {
    signOut(auth);
    dispatch(authSlice.actions.SET_SIGNED_IN(false));
  } catch (error) {}
};
