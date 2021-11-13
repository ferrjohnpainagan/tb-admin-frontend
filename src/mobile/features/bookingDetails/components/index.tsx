import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { IBookingItem } from "../../../../interfaces";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";
import Loader from "../../../../shared/Loader";
import BookingCard from "./BookingCard";

interface stateType {
    data: IBookingItem;
}

const Wrapper: React.FC<any> = (...props) => {
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
                <BookingCard bookingDetails={bookingDetails} />
            </div>
            <BottomAppBar />
        </div>
    );
};

export default Wrapper;
