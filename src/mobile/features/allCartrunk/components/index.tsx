import React, { useState, useEffect } from "react";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";
import SmallCard from "../../../../shared/SmallCard";

const Wrapper: React.FC<any> = (props) => {
    const [cartrunkList, setCartrunkList] = useState([]);

    return (
        <div className="bg-defaultPinkBg h-screen overflow-scroll">
            <Header
                type={"cartrunk"}
                showBackBtn={true}
                title={"All Cartrunk"}
            />
            All Cartrunk
            <BottomAppBar />
        </div>
    );
};

export default Wrapper;
