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
        {/* This div will have the animated border */}
      </div>
      <div className="bg-[#300b9e] p-4 rounded-full w-[70px] h-[70px] flex items-center justify-center">
        {/* Your content goes here */}
        <img src={skin} alt="Player Skin" />
      </div>
    </div>
  );
}

// function Players({ skin }) {
//   return (
//     <div className="relative inline-block">
//       <div className="   animate-pulse rounded-full border-2 border-red-500 overflow-hidden">
//         {/* This div will have the animated border */}
//       </div>
//       <div className="bg-[#300b9e] p-4 rounded-full w-[70px] h-[70px] flex items-center justify-center">
//         {/* Your content goes here */}
//         <img src={skin} alt="Player Skin" />
//       </div>
//     </div>
//   );
// }
export default Players;
