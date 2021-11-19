import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import * as helper from "../../../../utils/helper";

import SmallCard from "../../../../shared/SmallCard";

import { IBookingItem } from "../../../../interfaces";

interface Props {
  setLoading: any;
}

const BookingsList: React.FC<Props> = ({ setLoading }) => {
  const history = useHistory();
  const [bookingsList, setBookingsList] = useState([]);
  const [datesList, setDatesList] = useState([]);

  /** Handles the grouping of bookings by date */
  const groupBookingsByDate = (list: IBookingItem[]): void => {
    let dates: string[] = [];

    list.map((booking) => {
      dates.push(booking.date);
    });

    setDatesList([...new Set(dates)]);
    setBookingsList(list);
  };

  /** Handles tapping of booking card */
  const viewBooking = (booking: IBookingItem) => {
    setLoading(true);

    history.push("/admin/booking#details", { data: booking });
  };

  useEffect(() => {
    groupBookingsByDate(helper.SampleBookings);
  }, []);
  return (
    <div>
      <div className="px-4 text-3xl font-bold tracking-wide">All Bookings</div>

      <div className="p-4">
        {datesList.map((date, index) => {
          return (
            <div key={index}>
              <div className="text-defaultBlack text-sm font-poppins tracking-wider">
                {date}
              </div>

              {bookingsList.map((booking, index) => {
                if (booking.date === date) {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        viewBooking(booking);
                      }}
                    >
                      <SmallCard
                        type={"allBookings"}
                        packageType={booking.packageType}
                        sender={booking.from}
                        location={booking.location}
                        date={booking.date}
                        status={booking.status}
                        price={booking.amount}
                      />
                    </div>
                  );
                } else {
                  return;
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingsList;
