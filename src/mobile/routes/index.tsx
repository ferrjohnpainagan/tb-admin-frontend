import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Route from "./Routes";

import AuthContainer from "../features/auth/containers/Main";
import HomeContainer from "../features/home/containers/Main";
import AllBookingsContainer from "../features/allBookings/containers/Main";
import AllCartrunkContainer from "../features/allCartrunk/containers/Main";
import AllDeliveriesContainer from "../features/allDeliveries/containers/Main";

const index = () => {
  return (
    <Switch>
      <Route
        path="/admin/auth"
        component={AuthContainer}
        name="Auth"
        exact={false}
        isPrivate={false}
      />
      <Route
        path="/admin/home"
        component={HomeContainer}
        name="Home"
        exact={false}
        isPrivate={true}
      />
      <Route
        path="/admin/bookings/all"
        component={AllBookingsContainer}
        name="AllBookings"
        exact={true}
        isPrivate={true}
      />
      <Route
        path="/admin/bookings/cartrunk"
        component={AllCartrunkContainer}
        name="AllCartrunk"
        exact={true}
        isPrivate={true}
      />
      <Route
        path="/admin/bookings/deliveries"
        component={AllDeliveriesContainer}
        name="AllDeliveries"
        exact={true}
        isPrivate={true}
      />
      <Redirect to="/admin/home" exact={true} />
    </Switch>
  );
};

export default index;
