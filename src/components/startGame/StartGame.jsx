import React from "react";
import Image from "/images/startGame.png";
function StartGame({ startGame }) {
  return (
    <>
      <div className="box flex items-center justify-center h-svh w-svw bg-gray-400">
        <div className=" relative  box flex flex-col items-center justify-center bg-gradient-to-b from-[#2f22c3] to-[#9e18c6]  w-[300px] h-[500px] rounded-xl">
          <img src={Image} />
          <button
            className="bg-white py-[6px] px-[20px] rounded-full absolute top-[60%]  border-transparent hover:border-gray-400 border-2"
            onClick={startGame}
          >
            Let's Play
          </button>
        </div>
      </div>
    </>
  );
}

export default StartGame;
