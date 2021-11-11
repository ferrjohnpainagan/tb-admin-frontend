import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { IBookingItem } from "../../../../interfaces";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";
import TextLabel from "../../../../shared/TextLabel";

const Wrapper: React.FC<any> = (props) => {
    interface stateType {
        data: IBookingItem;
    }
    const { state } = useLocation<stateType>();
    const [bookingDetails, setBookingDetails] = useState<IBookingItem>();

    useEffect(() => {
        setBookingDetails(state.data);
    }, []);
    return (
        <div className="bg-defaultPinkBg h-screen overflow-scroll">
            <Header type={"deliveries"} showBackBtn={true} title={"Details"} />

            <div className="p-4">
                <div className="">
                    <div className="flex flex-col bg-defaultWhite p-4 rounded-xl">
                        <div
                            className={`w-24 h-5 p-1 rounded-2xl flex items-center justify-center font-poppins text-xs font-medium tracking-wider text-defaultWhite mb-2 ${
                                bookingDetails?.status === "IN PROCESS"
                                    ? "bg-statusBlue"
                                    : bookingDetails?.status === "DELIVERED"
                                    ? "bg-statusGreen"
                                    : "bg-statusRed"
                            }`}
                        >
                            {bookingDetails?.status}
                        </div>

                        <div className="flex justify-between mb-2">
                            <div className="w-1/2 flex justify-between pr-4">
                                <div>
                                    <TextLabel text={"Type"} />
                                    <div>image</div>
                                </div>
                                <div>
                                    <TextLabel text={"Theme"} />

                                    <div>Color</div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <TextLabel text={"Date & Time"} />
                                <div>time</div>
                            </div>
                        </div>

                        <div className="flex mb-2">
                            <div className="w-1/2">
                                <TextLabel text={"From"} />
                                <div>Name</div>
                            </div>
                            <div className="w-1/2">
                                <TextLabel text={"To"} />
                                <div>Name</div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <TextLabel text={"Location"} />
                            <div>Sample</div>
                        </div>

                        <div className="flex">
                            <div className="w-1/2">
                                <TextLabel text={"Amount"} />
                                <div>Money</div>
                            </div>
                            <div className="w-1/2">Button</div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomAppBar />
        </div>
    );
};

export default Wrapper;
