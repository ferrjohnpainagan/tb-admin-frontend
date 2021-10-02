import React from "react";
import * as helper from "../utils/helper";

import HomeInactive from "../img/home-inactive.svg";
import HomeActive from "../img/home-active.svg";
import AllBookingsActive from "../img/all-bookings-active.svg";
import AllBookingsInactive from "../img/all-bookings-inactive.svg";
import CartrunkActive from "../img/cartrunk-active.svg";
import CartrunkInactive from "../img/cartrunk-inactive.svg";
import DeliveriesActive from "../img/deliveries-active.svg";
import DeliveriesInactive from "../img/deliveries-inactive.svg";

const BottomAppBar = () => {
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
      <div className="w-screen h-14 bg-defaultGray absolute bottom-0 flex justify-between items-center px-6">
        <div>
          <img src={activeLink("home") ? HomeActive : HomeInactive} />
        </div>
        <div>
          <img
            src={activeLink("all") ? AllBookingsActive : AllBookingsInactive}
          />
        </div>
        <div>
          <img
            src={activeLink("cartrunk") ? CartrunkActive : CartrunkInactive}
          />
        </div>
        <div>
          <img
            src={
              activeLink("deliveries") ? DeliveriesActive : DeliveriesInactive
            }
          />
        </div>
      </div>
    </>
  );
};

export default BottomAppBar;
