import React from "react";
import BottomAppBar from "../../../../shared/BottomAppBar";

import Header from "../../../../shared/Header";
import BookingsToday from "./BookingsToday";
import CartrunkCard from "./CartrunkCard";
import DeliveriesCard from "./DeliveriesCard";

const Wrapper: React.FC<any> = (props) => {
  return (
    <>
      <div className=" bg-defaultPinkBg h-screen">
        <Header
          type={"home"}
          showBackBtn={false}
          title={"Hi"}
          accntName={"Irengaslom"}
        />

        <div className="p-7">
          <BookingsToday />
          <CartrunkCard />
          <DeliveriesCard />
        </div>

        <BottomAppBar />
      </div>
    </>
  );
};

export default Wrapper;
