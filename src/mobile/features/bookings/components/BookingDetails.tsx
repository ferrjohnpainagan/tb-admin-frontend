import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { IBookingItem } from "../../../../interfaces";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";
import Loader from "../../../../shared/Loader";
import BookingCard from "./BookingCard";
import TextLabel from "../../../../shared/TextLabel";

interface stateType {
  data: IBookingItem;
}

interface Props {
  loading: boolean;
  setLoading: any;
}

const BookingDetails: React.FC<Props> = ({ loading, setLoading }) => {
  const { state } = useLocation<stateType>();
  const [bookingDetails, setBookingDetails] = useState<IBookingItem>();

  useEffect(() => {
    setLoading(true);
    setBookingDetails(state.data);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="bg-defaultPinkBg h-screen overflow-scroll">
      <div className="px-4 text-3xl font-bold tracking-wide">Details</div>

      <div className="p-4">
        <div className="mb-2">
          <TextLabel text={"Transaction"} />
          <div className="font-poppins text-xl text-defaultBlack font-medium">
            # {bookingDetails?.referenceNumber}
          </div>
        </div>

        <BookingCard bookingDetails={bookingDetails} />
      </div>
    </div>
  );
};

export default BookingDetails;
