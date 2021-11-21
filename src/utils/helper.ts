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
  "motif-blue",
  "motif-red",
  "motif-green",
  "motif-pink",
  "motif-gold",
  "motif-orange",
  "motif-violet",
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
