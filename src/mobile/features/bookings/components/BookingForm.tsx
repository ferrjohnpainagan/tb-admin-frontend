import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { addBooking } from "../../../../redux/booking/actions";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

interface stateType {
  type: string;
  bookingDetails: any;
}

interface IBookingInput {
  packageType: string;
  date: string | Date | undefined | null;
  time: string;
  from: string;
  fromContact: string;
  to: string;
  toContact: string;
  location: string;
  amount: string | number | undefined;
  status: string;
  theme: string | undefined;
}

const BookingForm = () => {
  const dispatch = useDispatch();
  const { state } = useLocation<stateType>();
  const [selectedDate, setSelectedDate] = useState<Date | undefined | null>(
    undefined
  );

  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<IBookingInput>({
    defaultValues: state?.type === "add" ? {} : state?.bookingDetails,
  });

  const onSubmit: SubmitHandler<IBookingInput> = async (data) => {
    let bookingData;
    if (state?.type === "add") {
      bookingData = {
        ...data,
        date: moment(selectedDate).format("MMMM DD, YYYY"),
        time: moment(selectedDate).format("h:mm a"),
        status: "IN PROCESS",
        referenceNumber: uuidv4().split("-")[0].toUpperCase(),
      };
      dispatch(addBooking(bookingData));
    } else {
      bookingData = {
        ...data,
        date: moment(selectedDate).format("MMMM DD, YYYY"),
        time: moment(selectedDate).format("h:mm a"),
        status: "IN PROCESS",
      };
      alert("Update feature in progress");
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="bg-defaultPinkBg h-screen overflow-scroll">
      <div className="px-4 text-3xl font-bold tracking-wide">
        {state?.type === "update" ? "Update" : "Add"} Booking
      </div>

      <div className="p-4">
        <div className="flex flex-col bg-defaultWhite p-4 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between">
              <select
                className="appearance-none border rounded w-45 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
                id="packageType"
                placeholder="packageType"
                {...register("packageType", { required: true })}
              >
                <option value="">Type</option>
                <option value="cartrunk">Cartrunk</option>
                <option value="delivery">Delivery</option>
              </select>
              <select
                className="appearance-none border rounded w-45 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
                id="theme"
                placeholder="theme"
                {...register("theme", { required: false })}
              >
                <option value="">Theme</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="pink">Pink</option>
                <option value="gold">Gold</option>
                <option value="orange">Orange</option>
                <option value="violet">Violet</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="">
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Select date"
                    onChange={(date: Date | null) => {
                      setSelectedDate(date);
                    }}
                    selected={selectedDate}
                    value={
                      selectedDate
                        ? moment(selectedDate).format("MMMM DD, YYYY")
                        : ""
                    }
                    showTimeSelect={true}
                  />
                )}
              />
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                id="time"
                type="text"
                placeholder="Time"
                {...register("time", { required: false })}
                value={
                  selectedDate ? moment(selectedDate).format("h:mm a") : ""
                }
              />
            </div>

            <div className="flex justify-between">
              <input
                className="appearance-none border rounded w-45 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
                id="from"
                type="text"
                placeholder="Sender"
                {...register("from", { required: true })}
              />
              <input
                className="appearance-none border rounded w-45 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
                id="fromContact"
                type="text"
                placeholder="Contact No."
                {...register("fromContact", { required: true })}
              />
            </div>
            <div className="flex justify-between">
              <input
                className="appearance-none border rounded w-45 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="to"
                type="text"
                placeholder="Receiver"
                {...register("to", { required: true })}
              />
              <input
                className="appearance-none border rounded w-45 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="toContact"
                type="text"
                placeholder="Contact No."
                {...register("toContact", { required: true })}
              />
            </div>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              id="location"
              type="text"
              placeholder="Location"
              {...register("location", { required: true })}
            />
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              type="text"
              placeholder="Amount"
              {...register("amount", { required: true })}
            />

            <button className="bg-defaultPurple w-full py-2 my-3 rounded-full text-white">
              {state?.type === "update" ? "Update" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
