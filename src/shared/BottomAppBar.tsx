import React from "react";
import { useHistory } from "react-router";
import * as helper from "../utils/helper";

import HomeInactive from "../img/home-inactive.svg";
import HomeActive from "../img/home-active.svg";
import AllBookingsActive from "../img/all-bookings-active.svg";
import AllBookingsInactive from "../img/all-bookings-inactive.svg";
import CartrunkActive from "../img/cartrunk-active.svg";
import CartrunkInactive from "../img/cartrunk-inactive.svg";
import DeliveriesActive from "../img/deliveries-active.svg";
import DeliveriesInactive from "../img/deliveries-inactive.svg";

/** Component for the bottom app bar
 *
 * @component
 */
const BottomAppBar = () => {
  const history = useHistory();
  /** Checks if btn is currently active
   *
   * @param {string} current - accepts the name of the btn
   * @returns {boolean}
   */
  const activeLink = (current: string): boolean => {
    let path = helper.getPath();
    return path.includes(current);
  };

  return (
    <>
      <div className="w-screen h-14 bg-defaultGray absolute bottom-0 flex justify-between items-center px-6 mt-10">
        <div className="w-14 flex justify-center">
          <img
            src={activeLink("home") ? HomeActive : HomeInactive}
            onClick={() => history.push("/admin/home")}
            alt="home"
          />
        </div>
        <div className="w-14 flex justify-center">
          <img
            src={activeLink("all") ? AllBookingsActive : AllBookingsInactive}
            onClick={() => history.push("/admin/bookings/all")}
            alt="all"
          />
        </div>
        <div className="w-14 flex justify-center">
          <img
            src={activeLink("cartrunk") ? CartrunkActive : CartrunkInactive}
            onClick={() => history.push("/admin/bookings/cartrunk")}
            alt="cartrunk"
          />
        </div>
        <div className="w-14 flex justify-center">
          <img
            src={
              activeLink("deliveries") ? DeliveriesActive : DeliveriesInactive
            }
            onClick={() => history.push("/admin/bookings/deliveries")}
            alt="delivery"
          />
        </div>
      </div>
    </>
  );
};

export default BottomAppBar;
