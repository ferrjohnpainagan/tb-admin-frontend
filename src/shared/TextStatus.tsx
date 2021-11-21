import React from "react";

interface TextProps {
  status: string;
}

/** Component for status text
 *
 * @component
 */
const TextStatus: React.FC<TextProps> = ({ status }) => {
  return (
    <div
      className={`w-24 h-5 p-1 rounded-2xl flex items-center justify-center font-poppins text-xs font-medium tracking-wider text-defaultWhite mb-2 ${
        status === "PROCESSING"
          ? "bg-statusBlue"
          : status === "DELIVERED"
          ? "bg-statusGreen"
          : "bg-statusRed"
      }`}
    >
      {status}
    </div>
  );
};

export default TextStatus;
