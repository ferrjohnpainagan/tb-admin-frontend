import React from "react";
import { useHistory } from "react-router";

import BackBtn from "../img/back-btn.png";
import Logo from "../img/sorpresa-logo.png";

interface HeaderProps {
    /** Type of header to be rendered */
    type: string;
    /** Whether to show the back btn */
    showBackBtn?: boolean;
    /** Header title */
    title: string;
    /** Account name to be used when at Home component */
    accntName?: string;
}

/** Reusable Header component
 *
 * @component
 */

const Header = (props: HeaderProps) => {
    const history = useHistory();
    return (
        <>
            <div className="w-screen h-20 px-6 bg-defaultGray flex justify-between items-center">
                {props.showBackBtn ? (
                    <div>
                        <img
                            src={BackBtn}
                            alt="back-btn"
                            onClick={() => history.goBack()}
                        />
                    </div>
                ) : null}
                <div className="flex">
                    <div className="px-2 text-3xl font-bold tracking-wide">
                        {props.title}
                    </div>
                    {props.type === "home" ? (
                        <div className="px-2 text-3xl font-bold text-pinkAccntName tracking-wide">
                            {props.accntName + "!"}
                        </div>
                    ) : null}
                </div>
                <div className="w-11">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </>
    );
};

export default Header;
