import React, { useEffect } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import { signOutAdmin, signInAdmin } from "../../redux/auth/actions";
import * as helper from "../../utils/helper";
import jwtDecode from "jwt-decode";
import moment from "moment";

import { IPage, IRoute } from "../../interfaces";

const Routes: React.FC<IRoute> = ({
  component: Component,
  path,
  isPrivate,
}) => {
  const dispatch = useDispatch();
  const { isSignedIn, loginExp } = useSelector(
    (state: RootStateOrAny) => state.auth
  );

  let ms = moment(loginExp, "MM/DD/YYYY hh:mm:ss a").diff(
    moment(moment(), "MM/DD/YYYY hh:mm:ss a")
  );

  useEffect(() => {}, []);

  /** Redirect user to login page
   * if user opens a private page while not signed in
   */
  if (isPrivate && !isSignedIn) {
    return <Redirect to="/admin/auth#login" />;
  }

  /** Redirect user to homepage
   * if user has signed in already
   */

  if (isSignedIn) {
    if (path === "/admin/auth") {
      return <Redirect to="/admin/home" />;
    }
  }

  if (ms < 0) {
    dispatch(signOutAdmin());
  }

  return (
    <>
      <Route
        render={(props: RouteComponentProps<any>) => <Component {...props} />}
      />
    </>
  );
};

export default Routes;
