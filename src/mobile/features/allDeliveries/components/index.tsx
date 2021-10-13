import React from "react";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";

const Wrapper: React.FC<any> = (props) => {
  return (
    <>
      <Header type={"deliveries"} showBackBtn={true} title={"All Deliveries"} />
      All Deliveries
      <BottomAppBar />
    </>
  );
};

export default Wrapper;
