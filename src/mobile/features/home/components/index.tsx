import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import * as helper from "../../../../utils/helper";

import BottomAppBar from "../../../../shared/BottomAppBar";
import Header from "../../../../shared/Header";
import BookingsToday from "./BookingsToday";
import CartrunkCard from "./CartrunkCard";
import DeliveriesCard from "./DeliveriesCard";

const Wrapper: React.FC<any> = (props) => {
  const { adminName } = useSelector((state: RootStateOrAny) => state.auth);
  return (
    <>
      <div className="bg-defaultPinkBg h-screen overflow-scroll">
        <Header
          type={"home"}
          showBackBtn={false}
          title={"Hi"}
          accntName={helper.handleDisplayName(adminName)}
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
