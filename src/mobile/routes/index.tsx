import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Route from "./Routes";

import AuthContainer from "../features/auth/containers/Main";
import HomeContainer from "../features/home/containers/Main";
import AllBookingsContainer from "../features/bookings/containers/Main";
import BookingDetailsContainer from "../features/bookingDetails/containers/Main";

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
        path="/admin/booking"
        component={AllBookingsContainer}
        name="AllBookings"
        exact={true}
        isPrivate={true}
      />
      <Route
        path="/admin/bookings/details"
        component={BookingDetailsContainer}
        name="BookingDetails"
        exact={true}
        isPrivate={true}
      />
      <Redirect to="/admin/home" exact={true} />
    </Switch>
  );
};

export default index;
