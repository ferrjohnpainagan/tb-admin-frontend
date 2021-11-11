import React, { useState, useEffect } from "react";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";
import SmallCard from "../../../../shared/SmallCard";
import * as helper from "../../../../utils/helper";
import { IBookingItem } from "../../../../interfaces";

const Wrapper: React.FC<any> = (props) => {
    const [bookingsList, setBookingsList] = useState([]);
    const [datesList, setDatesList] = useState([]);

    const groupBookingsByDate = (list: IBookingItem[]): void => {
        let dates: string[] = [];
        list.map((booking) => {
            dates.push(booking.date);
        });

        setDatesList([...new Set(dates)]);
        setBookingsList(list);
    };

    useEffect(() => {
        groupBookingsByDate(helper.SampleBookings);
    }, []);
    return (
        <>
            <div className="bg-defaultPinkBg h-screen overflow-scroll">
                <Header
                    type={"all"}
                    showBackBtn={true}
                    title={"All Bookings"}
                />

                <div className="p-4">
                    {datesList.map((date, index) => {
                        return (
                            <div>
                                <div
                                    key={index}
                                    className="text-defaultBlack text-sm font-poppins tracking-wider"
                                >
                                    {date}
                                </div>
                                <div>
                                    {bookingsList.map((booking, index) => {
                                        if (booking.date === date) {
                                            return (
                                                <SmallCard
                                                    key={index}
                                                    type={"allBookings"}
                                                    packageType={
                                                        booking.packageType
                                                    }
                                                    sender={booking.from}
                                                    location={booking.location}
                                                    date={booking.date}
                                                    status={booking.status}
                                                    price={booking.amount}
                                                />
                                            );
                                        } else {
                                            return;
                                        }
                                    })}
                                </div>
                            </div>
                        );
                    })}
                    {}
                </div>

                <BottomAppBar />
            </div>
        </>
    );
};

export default Wrapper;
