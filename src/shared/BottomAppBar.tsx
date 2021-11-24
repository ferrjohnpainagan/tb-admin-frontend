import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as helper from "../utils/helper";
import { getAllBookings } from "../redux/booking/actions";

import HomeInactive from "../img/home-inactive.svg";
import HomeActive from "../img/home-active.svg";
import AllBookingsActive from "../img/all-bookings-active.svg";
import AllBookingsInactive from "../img/all-bookings-inactive.svg";
import AddIcon from "../img/add-Icon.svg";

/** Component for the bottom app bar
 *
 * @component
 */
const BottomAppBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
      <div className="w-screen h-14 bg-defaultGray absolute bottom-0 flex justify-between items-center px-16 mt-10 rounded-3xl">
        <div className="w-14 flex justify-center">
          <img
            className="w-8"
            src={activeLink("home") ? HomeActive : HomeInactive}
            onClick={() => {
              dispatch(getAllBookings());
              history.push("/admin/home");
            }}
            alt="home"
          />
        </div>
        <div className="w-14 flex justify-center">
          <img
            src={AddIcon}
            onClick={() => history.push("/admin/booking#form", { type: "add" })}
            alt="add"
          />
        </div>
        <div className="w-14 flex justify-center">
          <img
            className="w-6"
            src={
              activeLink("booking") ? AllBookingsActive : AllBookingsInactive
            }
            onClick={() => {
              dispatch(getAllBookings());
              history.push("/admin/booking");
            }}
            alt="all"
          />
        </div>
        {/* <div className="w-14 flex justify-center">
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
        </div> */}
      </div>
    </>
  );
};

export default BottomAppBar;
