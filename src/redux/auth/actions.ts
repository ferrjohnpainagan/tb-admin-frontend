import { Dispatch } from "redux";
import { push } from "connected-react-router";
import { provider, auth, app } from "../../services/firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import authSlice from "./slice";

// const auth = getAuth();

export const getRegisteredAdmin = () => async () => {
  try {
    let response = await getAuth(app);
    console.log(response);
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
