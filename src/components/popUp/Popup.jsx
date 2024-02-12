import React from "react";
import Tropy from "/images/trophy.png";
function Popup({ status, cancelClick, playAgain }) {
  return (
    <>
      <div className="flex absolute z-50 bg-[#391898] text-[#FFE03B] font-roboto rounded-xl border-yellow-700 border-2 w-[250px] pb-3">
        <div className="flex flex-1 flex-col justify-center items-center">
          <div className="text-center rounded-lg">
            <div className="p-8 flex items-center justify-center flex-col">
              <h1 className="pt-2 pb-4 text-[20px]">
                {"game won by " + status}
              </h1>
              <p className="text-xs">
                <img src={Tropy} />
              </p>
            </div>
            <div className="flex mt-1 gap-1">
              <button
                className="flex-1 m-1  text-white text-center rounded-xl  p-1 bg-[#FF9900] hover:bg-[#df9c39]"
                onClick={cancelClick}
              >
                Cancel
              </button>
              <button
                className="flex-1 m-1 text-white text-center rounded-xl  p-1 bg-[#FF9900] hover:bg-[#df9c39]"
                onClick={playAgain}
              >
                Play again
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
