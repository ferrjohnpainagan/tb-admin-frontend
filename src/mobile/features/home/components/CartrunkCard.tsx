import React from "react";
import CartrunkImage from "../../../../img/cartrunk-big-card.png";
import CartrunkGradient from "../../../../img/cartrunk-gradient.png";

const CartrunkCard = () => {
  return (
    <>
      <div className="mt-4">
        <div>
          <span className="text-xl font-bold text-defaultBlack">Cartrunk</span>
        </div>
        <div style={{ height: "143px" }} className="my-2">
          <div className="h-full flex justify-between rounded-xl bg-defaultWhite">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="text-6xl text-purple2">12</div>
              <div className="text-tiny text-defaultBlack">
                Upcoming cartrunk surprises!
              </div>
            </div>
            <img src={CartrunkGradient} alt="cartrunk" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartrunkCard;
