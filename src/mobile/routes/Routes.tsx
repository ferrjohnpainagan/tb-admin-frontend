import React, { useEffect } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import { signOutAdmin } from "../../redux/auth/actions";
import * as helper from "../../utils/helper";

import { IPage, IRoute } from "../../interfaces";

const Routes: React.FC<IRoute> = ({
  component: Component,
  path,
  isPrivate,
}) => {
  const dispatch = useDispatch();
  const { isSignedIn } = useSelector((state: RootStateOrAny) => state.auth);

  useEffect(() => {
    // dispatch(signOutAdmin());
  }, []);

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

  return (
    <>
      <Route
        render={(props: RouteComponentProps<any>) => <Component {...props} />}
      />
    </>
  );
};

export default Routes;
