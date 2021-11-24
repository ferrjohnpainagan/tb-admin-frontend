import React from "react";
import { useHistory } from "react-router";
import moment from "moment";
import { IBookingItem } from "../../../../interfaces";

import Cartrunk from "../../../../img/cartrunk-small.svg";
import Delivery from "../../../../img/delivery-small.svg";

import TextLabel from "../../../../shared/TextLabel";
import TextStatus from "../../../../shared/TextStatus";
import CircleColor from "../../../../shared/CircleColor";
import BookingCostTable from "./BookingCostTable";
import DeleteIconRed from "../../../../img/delete-icon-red.svg";
import Modal from "../../../../shared/Modal";

interface BookingProps {
  /** Booking details object */
  bookingDetails: IBookingItem;
  show?: any;
  handleDelete?: any;
  openModal?: any;
  closeModal?: any;
}

/** Component for the Booking card details
 *
 * @component
 */
const BookingCard: React.FC<BookingProps> = ({
  bookingDetails,
  show,
  handleDelete,
  openModal,
  closeModal,
}) => {
  const history = useHistory();
  return (
    <div className="mb-16">
      <div className="flex flex-col bg-defaultWhite p-4 rounded-xl">
        <TextStatus status={bookingDetails?.status} />

        <div className="flex justify-between mb-2">
          <div className="w-1/2 flex justify-between pr-8">
            <div>
              <TextLabel text={"Type"} />
              <div>
                <img
                  src={
                    bookingDetails?.packageType === "cartrunk"
                      ? Cartrunk
                      : Delivery
                  }
                />
                <div className="font-poppins text-xl text-defaultBlack  font-medium">
                  {bookingDetails?.packageType}
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <TextLabel text={"Date & Time"} />
            <div className="font-poppins text-xl text-defaultBlack font-medium">
              {moment(bookingDetails?.date, "MMM DD, YYYY").format(
                "MMM DD, YYYY"
              )}
            </div>
            <div className="font-poppins text-xl text-defaultBlack  font-medium">
              {bookingDetails?.time}
            </div>
          </div>
        </div>

        <div className="flex mb-2">
          <div className="w-1/2">
            <TextLabel text={"From"} />
            <div className="font-poppins text-xl text-defaultBlack font-medium">
              {bookingDetails?.from}
            </div>
            <div className="font-poppins text-l text-defaultBlack font-medium">
              {bookingDetails?.fromContact}
            </div>
          </div>
          <div className="w-1/2">
            <TextLabel text={"To"} />
            <div className="font-poppins text-xl text-defaultBlack font-medium">
              {bookingDetails?.to}
            </div>
            <div className="font-poppins text-l text-defaultBlack font-medium">
              {bookingDetails?.toContact}
            </div>
          </div>
        </div>

        <div className="mb-2">
          <TextLabel text={"Location"} />
          <div className="font-poppins text-xl text-defaultBlack font-medium">
            {bookingDetails?.location}
          </div>
        </div>

        <div className="mb-2">
          <TextLabel text={"Theme/Motif"} />
          <div className="font-poppins text-xl text-defaultBlack font-medium">
            {bookingDetails?.theme}
          </div>
        </div>

        <div className="mb-2">
          <TextLabel text={"Greeting Card Message"} />
          <div className="font-poppins text-xl text-defaultBlack font-medium">
            {bookingDetails?.cardMessage}
          </div>
        </div>

        <div className="mb-2">
          <TextLabel text={"Background Music"} />
          <div className="font-poppins text-xl text-defaultBlack font-medium">
            {bookingDetails?.bgMusic}
          </div>
        </div>

        <div className="mb-2">
          <TextLabel text={"Celebrant's Age/Year Anniversary"} />
          <div className="font-poppins text-xl text-defaultBlack font-medium">
            {bookingDetails?.ageYear}
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <TextLabel text={"Package Rate"} />
            <div className="font-poppins text-xl text-purple3 font-medium">
              Php {bookingDetails?.amount}.00
            </div>
          </div>
        </div>

        <div className="mt-2">
          <TextLabel text={"Package Details"} />
          <BookingCostTable
            type={"card"}
            itemsList={bookingDetails?.packageDetails}
          />
        </div>

        <div className="mt-2">
          <div className="w-full flex justify-between items-center">
            <div
              className="w-28 p-1 font-poppins font-medium bg-statusRed text-defaultWhite rounded-2xl text-center"
              onClick={() => {
                openModal();
              }}
            >
              DELETE
            </div>
            <div
              className="w-28 p-1 font-poppins font-medium bg-purple3 text-defaultWhite rounded-2xl text-center"
              onClick={() => {
                history.push("/admin/booking#form", {
                  type: "update",
                  bookingDetails: bookingDetails,
                });
              }}
            >
              UPDATE
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        title={"Are you sure you want to delete this booking?"}
        message={"Once deleted, you can never retrieve it."}
        leftBtn={"CANCEL"}
        rightBtn={"DELETE"}
        leftBtnFn={closeModal}
        rightBtnFn={handleDelete}
      />
    </div>
  );
};

export default BookingCard;
