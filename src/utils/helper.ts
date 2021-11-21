import { v4 as uuidv4 } from "uuid";
import moment, { Moment } from "moment";

let now: Moment = moment();

/** Gets the current path
 *
 * @returns {string} - path
 */
export const getPath = (): string => {
  return window.location.href;
};

export const themeColors = [
  "motifBlue",
  "motifRed",
  "motifGreen",
  "motifPink",
  "motifGold",
  "motifOrange",
  "motifViolet",
];

/** Parses the theme for the package
 *
 * @returns {string} - theme
 */
export const parseColorTheme = (color: string) => {
  let parsedTheme;
  themeColors.map((theme) => {
    if (theme.toLowerCase().includes(color)) {
      parsedTheme = theme;
    }
  });
  return parsedTheme;
};

export const SampleBookings = [
  {
    id: uuidv4(),
    date: moment(new Date()).format("MMMM DD, YYYY"),
    time: now.format("hh:mm:ss a"),
    packageType: "cartrunk",
    from: "Master Rigel",
    to: "Jane",
    location: "Lucky 9, Mencidor Avenue, Tagum, 8100 Davao del Norte",
    amount: 5500,
    status: "IN PROCESS",
    theme: "red",
    referenceNumber: uuidv4().split("-")[0].toUpperCase(),
  },
  {
    id: uuidv4(),
    date: moment(new Date()).format("MMMM DD, YYYY"),
    time: now.format("hh:mm:ss a"),
    packageType: "delivery",
    from: "Master Rigel",
    to: "Jane",
    location: "Lucky 9, Mencidor Avenue, Tagum, 8100 Davao del Norte",
    amount: 5500,
    status: "DELIVERED",
    theme: "blue",
    referenceNumber: uuidv4().split("-")[0].toUpperCase(),
  },
  {
    id: uuidv4(),
    date: moment(new Date()).format("MMMM DD, YYYY"),
    time: now.format("hh:mm:ss a"),
    packageType: "cartrunk",
    from: "Master Rigel",
    to: "Jane",
    location: "Lucky 9, Mencidor Avenue, Tagum, 8100 Davao del Norte",
    amount: 5500,
    status: "CANCELLED",
    theme: "green",
    referenceNumber: uuidv4().split("-")[0].toUpperCase(),
  },
  {
    id: uuidv4(),
    date: moment(new Date("11/14/2021")).format("MMMM DD, YYYY"),
    time: now.format("hh:mm:ss a"),
    packageType: "delivery",
    from: "Master Rigel",
    to: "Jane",
    location: "Lucky 9, Mencidor Avenue, Tagum, 8100 Davao del Norte",
    amount: 5500,
    status: "IN PROCESS",
    theme: "gold",
    referenceNumber: uuidv4().split("-")[0].toUpperCase(),
  },
  {
    id: uuidv4(),
    date: moment(new Date("11/14/2021")).format("MMMM DD, YYYY"),
    time: now.format("hh:mm:ss a"),
    packageType: "cartrunk",
    from: "Master Rigel",
    to: "Jane",
    location: "Lucky 9, Mencidor Avenue, Tagum, 8100 Davao del Norte",
    amount: 5500,
    status: "IN PROCESS",
    theme: "blue",
    referenceNumber: uuidv4().split("-")[0].toUpperCase(),
  },
];

/** Sets display name at home */
export const handleDisplayName = (email: string) => {
  if (
    email.toLowerCase().includes("irene") ||
    email.toLowerCase().includes("ireng")
  ) {
    return "Irengaslom";
  } else if (email.toLowerCase().includes("estabillo")) {
    return "Queenbeast";
  } else {
    return "Tita Bakers";
  }
};
