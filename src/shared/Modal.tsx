import React from "react";

interface IModalProps {
  show: any;
  title?: string;
  message?: string;
  leftBtn?: string;
  rightBtn?: string;
  leftBtnFn?: any;
  rightBtnFn?: any;
}

const Modal: React.FC<IModalProps> = ({
  show,
  title,
  message,
  leftBtn,
  rightBtn,
  leftBtnFn,
  rightBtnFn,
}) => {
  return show.deleteModal ? (
    <div className="fixed inset-0 z-50 overflow-auto bg-defaultGray bg-opacity-90 flex">
      <div className="relative p-6 bg-white w-5/6 max-w-md m-auto flex flex-col items-center rounded-lg">
        <div className="text-center text-xl font-medium font-poppins">
          {title}
        </div>
        <div className="mt-4 text-center text-md font-normal text-defaultBlack font-poppins">
          {message}
        </div>
        <div className="mt-8 flex justify-around w-full">
          <div
            className="w-24 p-1 font-poppins font-medium bg-blue-500 text-defaultWhite rounded-2xl text-center"
            onClick={leftBtnFn}
          >
            {leftBtn}
          </div>
          <div
            className="w-24 p-1 font-poppins font-medium bg-statusRed text-defaultWhite rounded-2xl text-center"
            onClick={rightBtnFn}
          >
            {rightBtn}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
