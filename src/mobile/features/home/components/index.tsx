import React from "react";
import BottomAppBar from "../../../../shared/BottomAppBar";

import Header from "../../../../shared/Header";
import BookingsToday from "./BookingsToday";
import CartrunkCard from "./CartrunkCard";
import DeliveriesCard from "./DeliveriesCard";

const Wrapper: React.FC<any> = (props) => {
  return (
    <>
      <Header
        type={"home"}
        showBackBtn={false}
        title={"Hi"}
        accntName={"Irengaslom"}
      />
      <BookingsToday />
      <CartrunkCard />
      <DeliveriesCard />
      <BottomAppBar />
    </>
  );
};

export default Wrapper;
