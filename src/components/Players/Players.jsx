import React, { useState } from "react";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Players({ skin, isPulsing }) {
  let shouldPulse;
  if (isPulsing) {
    shouldPulse = true;
  } else {
    shouldPulse = false;
  }

  return (
    <div className="relative inline-block">
      <div
        className={`${
          shouldPulse ? "animate-bounce  " : "opacity-0"
        } rounded-full  overflow-hidden flex items-center justify-center`}
      >
        <MdKeyboardDoubleArrowDown className="text-red-500 text-[40px]" />
      </div>
      <div className="bg-[#300b9e] p-4 rounded-full w-[70px] h-[70px] flex items-center justify-center">
        <img src={skin} alt="Player Skin" />
      </div>
    </div>
  );
}

export default Players;
