import React from "react";
import Logo from "../img/sorpresa-logo.png";

/** Loader component used on loading scenarios
 *
 * @component
 */
const Loader = () => {
    return (
        <>
            <div className="bg-color-gradient w-screen h-screen flex justify-center items-center flex-col">
                <div className="w-1/2 animate-bounce">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </>
    );
};

export default Loader;
