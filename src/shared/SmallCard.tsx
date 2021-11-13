import React from "react";

import Cartrunk from "../img/cartrunk-small.svg";
import Delivery from "../img/delivery-small.svg";
import TextStatus from "../shared/TextStatus";

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
    price?: string | number;
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
    /** Conditionally render card details according to type */
    const renderCard = () => {
        if (type === "today") {
            return (
                <div className="text-xs text-opacity-60 text-defaultBlack flex items-center">
                    <div className="flex">{date}</div>
                </div>
            );
        } else if (type === "allBookings") {
            return (
                <div className="flex flex-col">
                    <div className="p-1 font-poppins text-center font-semibold text-xs text-purple3">
                        Php {price}.00
                    </div>
                    <TextStatus status={status} />
                </div>
            );
        }
    };

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

                {renderCard()}
            </div>
        </>
    );
};

export default SmallCard;
