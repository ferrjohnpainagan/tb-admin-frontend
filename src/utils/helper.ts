import { v4 as uuidv4 } from "uuid";
import moment, { Moment } from "moment";

let now: Moment = moment();

export const getPath = (): string => {
  return window.location.href;
};

export const SampleBookings = [
  {
    id: uuidv4(),
    date: moment(new Date()).format("MM/DD/YYYY"),
    time: now.format("hh:mm:ss a"),
    packageType: "cartrunk",
    from: "Master Rigel",
    to: "Jane",
    location: "Lucky 9, Mencidor Avenue, Tagum, 8100 Davao del Norte",
    amount: 5500,
    status: "IN PROCESS",
  },
  {
    id: uuidv4(),
    date: moment(new Date()).format("MM/DD/YYYY"),
    time: now.format("hh:mm:ss a"),
    packageType: "delivery",
    from: "Master Rigel",
    to: "Jane",
    location: "Lucky 9, Mencidor Avenue, Tagum, 8100 Davao del Norte",
    amount: 5500,
    status: "DELIVERED",
  },
  {
    id: uuidv4(),
    date: moment(new Date()).format("MM/DD/YYYY"),
    time: now.format("hh:mm:ss a"),
    packageType: "cartrunk",
    from: "Master Rigel",
    to: "Jane",
    location: "Lucky 9, Mencidor Avenue, Tagum, 8100 Davao del Norte",
    amount: 5500,
    status: "CANCELLED",
  },
];
