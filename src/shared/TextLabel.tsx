import React from "react";

interface TextProps {
    text: string | undefined;
}

/** Component for item labels
 *
 * @component
 *
 */
const TextLabel: React.FC<TextProps> = ({ text }) => {
    return (
        <div className="font-poppins text-xs text-opacity-60 text-defaultBlack">
            {text}
        </div>
    );
};

export default TextLabel;
