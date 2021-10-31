import React from "react";
import DeliveryGradient from "../../../../img/deliveries-gradient.png";

const DeliveriesCard = () => {
  return (
    <>
      <div className="mt-4">
        <div>
          <span className="text-xl font-bold text-defaultBlack">
            Deliveries
          </span>
        </div>
        <div style={{ height: "143px" }} className="my-2">
          <div className="h-full flex justify-end rounded-xl bg-defaultWhite">
            <div className="flex flex-col justify-center items-center absolute left-10 mt-8">
              <div className="text-6xl text-purple2">12</div>
              <div className="font-poppins text-tiny text-defaultBlack">
                Upcoming delivery surprises!
              </div>
            </div>
            <img src={DeliveryGradient} alt="cartrunk" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveriesCard;
