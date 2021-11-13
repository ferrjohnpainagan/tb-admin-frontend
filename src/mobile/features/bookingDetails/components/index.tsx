import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { IBookingItem } from "../../../../interfaces";

import Cartrunk from "../../../../img/cartrunk-small.svg";
import Delivery from "../../../../img/delivery-small.svg";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";
import TextLabel from "../../../../shared/TextLabel";
import TextStatus from "../../../../shared/TextStatus";
import Loader from "../../../../shared/Loader";
import CircleColor from "../../../../shared/CircleColor";

interface stateType {
    data: IBookingItem;
}

const Wrapper: React.FC<any> = (props) => {
    const { state } = useLocation<stateType>();
    const [bookingDetails, setBookingDetails] = useState<IBookingItem>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setBookingDetails(state.data);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return loading ? (
        <Loader />
    ) : (
        <div className="bg-defaultPinkBg h-screen overflow-scroll">
            <Header type={"deliveries"} showBackBtn={true} title={"Details"} />

            <div className="p-4">
                <div className="">
                    <div className="flex flex-col bg-defaultWhite p-4 rounded-xl">
                        <TextStatus status={bookingDetails?.status} />

                        <div className="flex justify-between mb-2">
                            <div className="w-1/2 flex justify-between pr-8">
                                <div>
                                    <TextLabel text={"Type"} />
                                    <div>
                                        <img
                                            src={
                                                bookingDetails?.packageType ===
                                                "cartrunk"
                                                    ? Cartrunk
                                                    : Delivery
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <TextLabel text={"Theme"} />
                                    <CircleColor color={bookingDetails.theme} />
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
