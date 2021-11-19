import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { IBookingItem } from "../../../../interfaces";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";
import Loader from "../../../../shared/Loader";
import BookingCard from "../../bookings/components/BookingCard";
import TextLabel from "../../../../shared/TextLabel";

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

  return <div></div>;
};

export default Wrapper;
