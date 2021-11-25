import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { signOutAdmin } from "../redux/auth/actions";

import BackBtn from "../img/back-btn.png";
import Logo from "../img/sorpresa-logo.png";
import LogoutIcon from "../img/logout-icon.svg";

interface HeaderProps {
  /** Type of header to be rendered */
  type: string;
  /** Whether to show the back btn */
  showBackBtn?: boolean;
  /** Header title */
  title: string;
  /** Account name to be used when at Home component */
  accntName?: string;
  /** Whether a component is currently loading */
  loading?: boolean;
}

/** Reusable Header component
 *
 * @component
 */

const Header = (props: HeaderProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <div
        className={`w-screen h-20 px-6 flex justify-between items-center ${
          props.loading ? "absolute top-0" : ""
        }`}
      >
        {props.showBackBtn ? (
          <div>
            <img
              src={BackBtn}
              alt="back-btn"
              onClick={() => {
                if (
                  props.type === "booking" &&
                  window.location.href.includes("list")
                ) {
                  history.replace("/admin/home");
                } else {
                  history.goBack();
                }
              }}
            />
          </div>
        ) : null}
        <div className="flex">
          <div className="px-1 text-2xl font-bold tracking-wide">
            {props.title}
          </div>
          {props.type === "home" ? (
            <div className="px-1 text-2xl font-bold text-pinkAccntName tracking-wide">
              {props.accntName + "!"}
            </div>
          ) : null}
        </div>
        <div className="flex justify-around w-24">
          <div className="w-10">
            <img src={Logo} alt="logo" />
          </div>
          <img
            src={LogoutIcon}
            alt="logout"
            onClick={() => dispatch(signOutAdmin())}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
