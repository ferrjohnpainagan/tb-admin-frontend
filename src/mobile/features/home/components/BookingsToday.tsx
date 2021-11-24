import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import moment from "moment";
import * as helper from "../../../../utils/helper";
import { getAllBookings } from "../../../../redux/booking/actions";
import { IBookingItem } from "../../../../interfaces";

import SmallCard from "../../../../shared/SmallCard";

const BookingsToday = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { bookings } = useSelector((state: RootStateOrAny) => state.bookings);
  const [upcomingBookings, setUpcomingBookings] = useState<any>(bookings);

  /** Filters all bookings to display only future bookings */
  const filterUpcomingBookings = () => {
    let upcomingBookingsList: any = [];
    bookings.map((booking: any) => {
      if (moment(booking.date + " " + booking.time).isAfter(new Date())) {
        upcomingBookingsList.push(booking);
      } else {
        return;
      }
    });

    setUpcomingBookings(upcomingBookingsList);
  };

  useEffect(() => {
    dispatch(getAllBookings());
    filterUpcomingBookings();
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-defaultBlack">
            Upcoming Bookings
          </span>
          <div
            className="w-20 h-6 bg-defaultWhite flex items-center justify-center text-xs rounded-2xl text-gray-400"
            onClick={() => {
              history.push("/admin/booking");
            }}
          >
            SEE ALL
          </div>
        </div>
        {!!upcomingBookings &&
          upcomingBookings.map((booking: IBookingItem, index: any) => {
            if (index <= 5) {
              return (
                <div
                  key={index}
                  onClick={() => {
                    history.push("/admin/booking#details", { data: booking });
                  }}
                >
                  <SmallCard
                    type={"today"}
                    packageType={booking.packageType}
                    sender={booking.from}
                    location={booking.location}
                    date={booking.date}
                  />
                </div>
              );
            } else {
              return;
            }
          })}
      </div>
    </>
  );
};

export default BookingsToday;
