import React from "react";
import * as helper from "../utils/helper";

interface ColorProps {
  /** Theme for the package */
  color: string;
}

/** Circle shape component for theme
 *
 * @component
 */
const CircleColor: React.FC<ColorProps> = ({ color }) => {
  return (
    <div className="flex flex-col text-defaultBlack">
      <div
        className={`w-5 h-5 rounded-xl mt-2 bg-${helper.parseColorTheme(
          color
        )}`}
      ></div>

      {color}
    </div>
  );
};

export default CircleColor;
