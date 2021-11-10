import React, { useState, useEffect } from "react";
import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import { IPage, IRoute } from "../../interfaces";

const Routes: React.FC<IRoute> = ({
  component: Component,
  path,
  isPrivate,
}) => {
  const [signed, setSigned] = useState(true);

  useEffect(() => {
    setSigned(true);
  }, []);

  /** Redirect user to login page
   * if user opens a private page while not signed in
   */
  if (isPrivate && !signed) {
    return <Redirect to="/admin/auth#login" />;
  }

  /** Redirect user to homepage
   * if user has signed in already
   */

  if (signed) {
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
