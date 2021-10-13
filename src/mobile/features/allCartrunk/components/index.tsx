import React from "react";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";

const Wrapper: React.FC<any> = (props) => {
  return (
    <>
      <Header type={"cartrunk"} showBackBtn={true} title={"All Cartrunk"} />
      All Cartrunk
      <BottomAppBar />
    </>
  );
};

export default Wrapper;
