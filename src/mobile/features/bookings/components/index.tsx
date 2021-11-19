import React, { useState, useEffect } from "react";

import Header from "../../../../shared/Header";
import BottomAppBar from "../../../../shared/BottomAppBar";
import BookingsList from "./BookingsList";
import BookingDetails from "./BookingDetails";
import BookingForm from "./BookingForm";

const Wrapper: React.FC<any> = (props) => {
  const [loading, setLoading] = useState(false);
  const hashes = ["#list", "#details", "#form"];

  const currentPage = hashes.find(
    (hash) => hash === props.history.location.hash
  );

  const renderComponent = () => {
    switch (props.history.location.hash) {
      case "#form":
        return <BookingForm {...props} setLoading={setLoading} />;
      case "#list":
        return <BookingsList {...props} setLoading={setLoading} />;
      case "#details":
        return (
          <BookingDetails
            {...props}
            loading={loading}
            setLoading={setLoading}
          />
        );
      default:
        props.history.push("/admin/booking#list");
    }
  };

  return (
    <>
      <div className="bg-defaultPinkBg h-screen overflow-scroll">
        <Header
          type={"booking"}
          showBackBtn={true}
          title={""}
          loading={loading}
        />

        {renderComponent()}

        <BottomAppBar />
      </div>
    </>
  );
};

export default Wrapper;
