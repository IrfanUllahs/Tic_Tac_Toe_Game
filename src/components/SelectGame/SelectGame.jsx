import React from "react";
import image1 from "/images/selectGameImages/1.png";
import image2 from "/images/selectGameImages/2.png";
function SelectGame({ GameOn }) {
  return (
    <>
      <div className="box flex items-center justify-center h-svh w-svw bg-gray-400">
        <div className=" box flex flex-col items-center justify-center bg-gradient-to-b from-[#2f22c3] to-[#9e18c6]  w-[300px] h-[500px] rounded-xl">
          <h1 className="text-white text-[36px] font-bold font-roboto">
            Select Game
          </h1>

          <div className="mr-[120px] flex flex-col gap-[20px] text-white">
            {/* rule 1 is here */}
            <div className="wrapper relative  z-30 cursor-pointer  ">
              <div className="parent bg-[#FF8A00] rounded-full w-[80px] h-[80px] z-30 flex items-center justify-center">
                <img src={image1} />
              </div>
              <div className="child bg-[#F3501D] rounded-xl p-[5px] w-[150px]  absolute left-[80%] top-[25%] -z-10 text-center pr-2">
                single player
              </div>
            </div>
            {/* rule 2 is here  */}
            <div
              className="wrapper relative  z-30  cursor-pointer"
              onClick={GameOn}
            >
              <div className="parent bg-[#EB00FF] rounded-full w-[80px] h-[80px] z-30 flex items-center justify-center">
                <img src={image2} />
              </div>
              <div className="child bg-[#5309b3] rounded-xl p-[5px] w-[150px]  absolute left-[80%] top-[25%] -z-10 text-center pr-2">
                Two player
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectGame;
