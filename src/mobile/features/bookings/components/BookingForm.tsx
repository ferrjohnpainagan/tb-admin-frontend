import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import DatePicker from "react-datepicker";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { addBooking, updateBooking } from "../../../../redux/booking/actions";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import _ from "lodash";

import "react-datepicker/dist/react-datepicker.css";

import { IBookingItem } from "../../../../interfaces";
import BookingCostTable from "./BookingCostTable";
import TextLabel from "../../../../shared/TextLabel";

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

interface IItemInput {
  itemName: string;
  itemCost: string;
  addedBy: string;
  dateAdded: string;
}

const BookingForm = () => {
  const dispatch = useDispatch();
  const { adminName } = useSelector((state: RootStateOrAny) => state.auth);
  const { state } = useLocation<stateType>();
  const [formType, setFormType] = useState<any>();
  const [packageDetailsTable, setPackageDetailsTable] = useState<any>([]);
  const [itemInput, setItemInput] = useState({
    itemName: "",
    itemCost: "",
    addedBy: adminName,
    dateAdded: moment(new Date()).format("MMMM DD, YYYY h:mm a"),
  });
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

  /** Handle render of datepicker component when updating */
  const handleDefaultDate = () => {
    if (_.isUndefined(selectedDate)) {
      return new Date(
        state?.bookingDetails.date + " " + state?.bookingDetails.time
      );
    } else {
      return selectedDate;
    }
  };

  /** Handles add item in package details table */
  const handleAddItem = () => {
    if (itemInput.itemName !== "" || itemInput.itemCost !== "") {
      setPackageDetailsTable([...packageDetailsTable, itemInput]);
      setItemInput({
        itemName: "",
        itemCost: "",
        addedBy: adminName,
        dateAdded: moment(new Date()).format("MMMM DD, YYYY h:mm a"),
      });
    } else {
      alert("Can't add empty items");
    }
  };

  /** Handles package detail item remove */
  const handleRemoveItem = (indexRemove: number) => {
    let newItems = packageDetailsTable.filter(
      (item: IItemInput, index: number) => {
        return indexRemove !== index;
      }
    );

    setPackageDetailsTable(newItems);
  };

  const onSubmit: SubmitHandler<IBookingInput | IBookingItem> = async (
    data
  ) => {
    let bookingData;
    if (state?.type === "update") {
      bookingData = {
        ...data,
        date: selectedDate
          ? moment(selectedDate).format("MMMM DD, YYYY")
          : state?.bookingDetails?.date,
        time: selectedDate
          ? moment(selectedDate).format("h:mm a")
          : state?.bookingDetails?.time,
        id: state?.bookingDetails?.id,
        referenceNumber: state?.bookingDetails?.referenceNumber,
        packageDetails: packageDetailsTable,
      };
      dispatch(updateBooking(bookingData));
    } else {
      bookingData = {
        ...data,
        date: moment(selectedDate).format("MMMM DD, YYYY"),
        time: moment(selectedDate).format("h:mm a"),
        status: "PROCESSING",
        referenceNumber: uuidv4().split("-")[0].toUpperCase(),
        packageDetails: packageDetailsTable,
      };
      dispatch(addBooking(bookingData));
    }
  };

  useEffect(() => {
    if (_.isUndefined(state?.type)) {
      setFormType("add");
    } else {
      setFormType(state?.type);
      if (state?.type === "update") {
        setPackageDetailsTable(state?.bookingDetails?.packageDetails);
      }
    }
  }, []);

  return (
    <div className="bg-defaultPinkBg h-screen overflow-scroll mb-16">
      <div className="px-4 text-3xl font-bold tracking-wide">
        {state?.type === "update" ? "Update" : "Add"} Booking
      </div>

      <div className="p-4">
        <div className="flex flex-col bg-defaultWhite p-4 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            {state?.type === "update" ? (
              <>
                <TextLabel text={"Status"} />
                <select
                  className="appearance-none border rounded w-45 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="status"
                  {...register("status", { required: false })}
                >
                  <option value="PROCESSING">PROCESSING</option>
                  <option value="DELIVERED">DELIVERED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </>
            ) : null}

            <div className="flex justify-between">
              <div className="w-45 my-2">
                <TextLabel text={"Package Type"} />
                <select
                  className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                  id="packageType"
                  {...register("packageType", { required: true })}
                >
                  <option value="">Type</option>
                  <option value="cartrunk">Cartrunk</option>
                  <option value="delivery">Delivery</option>
                </select>
              </div>
              <div className="w-45 my-2">
                <TextLabel text={"Theme"} />
                <select
                  className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                  id="theme"
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
            </div>
            <div className="">
              {state?.type === "update" ? (
                <>
                  <TextLabel text={"Date"} />
                  <Controller
                    control={control}
                    name="date"
                    render={({ field }) => (
                      <DatePicker
                        placeholderText="Select date"
                        onChange={(date: Date | null) => {
                          setSelectedDate(date);
                        }}
                        selected={handleDefaultDate()}
                        value={
                          selectedDate
                            ? moment(selectedDate).format("MMMM DD, YYYY")
                            : state?.bookingDetails?.date
                        }
                        showTimeSelect={true}
                        minDate={new Date()}
                      />
                    )}
                  />
                </>
              ) : (
                <>
                  <TextLabel text={"Date"} />
                  <Controller
                    control={control}
                    name="date"
                    render={({ field }) => (
                      <DatePicker
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
                        minDate={new Date()}
                      />
                    )}
                  />
                </>
              )}
              <div className="mt-2">
                <TextLabel text={"Time"} />
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="time"
                  type="text"
                  {...register("time", { required: false })}
                  value={
                    selectedDate
                      ? moment(selectedDate).format("h:mm a")
                      : !_.isUndefined(state?.bookingDetails)
                      ? state?.bookingDetails?.time
                      : ""
                  }
                  readOnly
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-45 mt-2">
                <TextLabel text={"Sender"} />
                <input
                  className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                  id="from"
                  type="text"
                  {...register("from", { required: true })}
                />
              </div>
              <div className="w-45 mt-2">
                <TextLabel text={"Contact No."} />
                <input
                  className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                  id="fromContact"
                  type="text"
                  {...register("fromContact", { required: true })}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-45 mt-2">
                <TextLabel text={"Receiver"} />
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="to"
                  type="text"
                  {...register("to", { required: true })}
                />
              </div>
              <div className="w-45 mt-2">
                <TextLabel text={"Contact No."} />
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="toContact"
                  type="text"
                  {...register("toContact", { required: true })}
                />
              </div>
            </div>
            <div className="mt-2">
              <TextLabel text={"Location"} />
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                {...register("location", { required: true })}
              />
            </div>
            <div className="mt-2">
              <TextLabel text={"Amount"} />
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="amount"
                type="text"
                {...register("amount", { required: true })}
              />
            </div>

            <div className="mt-8">
              <TextLabel text={"Package details"} />
              <BookingCostTable
                type={"form"}
                itemsList={packageDetailsTable}
                handleRemoveItem={handleRemoveItem}
              />

              <div className="flex justify-between mt-2">
                <div className="w-45 mt-2">
                  <input
                    className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                    id="itemName"
                    type="text"
                    placeholder="Item Name"
                    value={itemInput.itemName}
                    onChange={(e) => {
                      setItemInput({ ...itemInput, itemName: e.target.value });
                    }}
                  />
                </div>
                <div className="w-45 mt-2">
                  <input
                    className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                    id="itemCost"
                    type="text"
                    placeholder="Item Cost"
                    value={itemInput.itemCost}
                    onChange={(e) => {
                      setItemInput({ ...itemInput, itemCost: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="w-1/2 py-2 my-3 rounded-full text-white bg-statusBlue"
                  onClick={handleAddItem}
                >
                  + Add Item
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-defaultPurple w-full py-2 my-3 rounded-full text-white"
            >
              {state?.type === "update" ? "Update Booking" : "Add Booking"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
