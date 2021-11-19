import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import * as helper from "../../../../utils/helper";
import { getAllBookings } from "../../../../redux/booking/actions";
import { IBookingItem } from "../../../../interfaces";

import SmallCard from "../../../../shared/SmallCard";

const BookingsToday = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { bookings } = useSelector((state: RootStateOrAny) => state.bookings);

  useEffect(() => {
    dispatch(getAllBookings());
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-defaultBlack">
            Bookings for today
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
        {!!bookings &&
          bookings.map((booking: IBookingItem, index: any) => {
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
          })}
      </div>
    </>
  );
};

export default BookingsToday;
