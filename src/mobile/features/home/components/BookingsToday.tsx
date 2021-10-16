import React from "react";
import SmallCard from "../../../../shared/SmallCard";
import * as helper from "../../../../utils/helper";

const BookingsToday = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-defaultBlack">
            Bookings for today
          </span>
          <div className="w-20 h-6 bg-defaultWhite flex items-center justify-center text-xs rounded-2xl text-gray-400">
            SEE ALL
          </div>
        </div>
        {helper.SampleBookings.map((booking, index) => {
          return (
            <SmallCard
              key={index}
              type={"today"}
              packageType={booking.packageType}
              sender={booking.from}
              location={booking.location}
              date={booking.date}
            />
          );
        })}
      </div>
    </>
  );
};

export default BookingsToday;
