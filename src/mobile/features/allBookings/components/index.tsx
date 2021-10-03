import React from "react";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";

const Wrapper: React.FC<any> = (props) => {
  return (
    <>
      <Header type={"all"} showBackBtn={true} title={"All Bookings"} />
      All Bookings
      <BottomAppBar />
    </>
  );
};

export default Wrapper;
