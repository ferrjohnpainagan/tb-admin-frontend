import React from "react";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";
import SmallCard from "../../../../shared/SmallCard";
import * as helper from "../../../../utils/helper";

const Wrapper: React.FC<any> = (props) => {
  return (
    <>
      <div className="bg-defaultPinkBg h-screen overflow-scroll">
        <Header type={"all"} showBackBtn={true} title={"All Bookings"} />

        <div className="p-4">
          {helper.SampleBookings.map((booking, index) => {
            return (
              <SmallCard
                key={index}
                type={"allBookings"}
                packageType={booking.packageType}
                sender={booking.from}
                location={booking.location}
                date={booking.date}
                status={booking.status}
                price={booking.amount}
              />
            );
          })}
        </div>

        <BottomAppBar />
      </div>
    </>
  );
};

export default Wrapper;
