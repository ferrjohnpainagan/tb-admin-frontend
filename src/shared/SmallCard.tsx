import React from "react";
import Cartrunk from "../img/cartrunk-small.svg";
import Delivery from "../img/delivery-small.svg";

interface SmallCardProps {
  /** template type of card to be used */
  type: string;
  /** either cartrunk or delivery package type */
  packageType: string;
  /** sender of the package */
  sender: string;
  /** location of the receiver */
  location: string;
  /** booked date for the package */
  date?: string;
  /** total price of the package */
  price?: string;
  /** current status of the package */
  status?: string;
}

/** Component for small-sized card
 *
 * @component
 *
 */
const SmallCard: React.FC<SmallCardProps> = ({
  type,
  packageType,
  sender,
  location,
  date,
  price,
  status,
}) => {
  return (
    <>
      <div className="my-2 flex bg-defaultWhite py-2 px-4 rounded-xl justify-between">
        <div className="flex">
          <div className="w-16 flex items-center">
            {packageType === "cartrunk" ? (
              <img src={Cartrunk} alt={packageType} />
            ) : (
              <img src={Delivery} alt={packageType} />
            )}
          </div>
          <div className="pl-3">
            <div className="text-lg font-medium">{sender}</div>
            <div className="text-xs text-opacity-60 text-defaultBlack overflow-hidden w-34 h-4">
              {location}
            </div>
          </div>
        </div>

        {/* Conditionally render this section accdng to type */}
        {type === "today" ? (
          <div className="text-xs text-opacity-60 text-defaultBlack flex items-center">
            <div className="flex">{date}</div>
          </div>
        ) : (
          <div>
            <div>{price}</div>
            <div>{status}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default SmallCard;
