import React, { useState, useEffect } from "react";
import Popup from "../popUp/Popup";
import Overlay from "../overlay/Overlay";
import oSkin from "/images/Oskin.png";
import xSkin from "/images/xSkin.png";
import CheckWinner from "../logic/CheckWinner";
import Players from "../Players/Players";

function Gameplay() {
  const [playerx, setPlayerx] = useState(true);
  const [palyery, setPalyery] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [filledBoxes, setFilledBoxes] = useState(0);
  const [Xscore, setXscore] = useState(0);
  const [Oscore, setOscore] = useState(0);
  const [draw, setdraw] = useState(0);
  const [playerArray, setArray] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [popupStatus, setPopupStatus] = useState(null);
  const [overlay, setoverlay] = useState(null);
  useEffect(() => {
    CheckWinner(setPopupStatus, setoverlay, playerArray, filledBoxes);
  }, [playerArray]);

  // this is useEffect for score handling

  useEffect(() => {
    if (popupStatus === "Player x") {
      setXscore((prevScore) => prevScore + 1);
    } else if (popupStatus === "Player 0") {
      setOscore((prevScore) => prevScore + 1);
    } else if (popupStatus === "Game Draw") {
      setdraw((prevScore) => prevScore + 1);
    }
  }, [popupStatus]);
  // To handle event
  const handleEvent = (selectedIndex) => {
    let currentPlayer = playerTurn ? "x" : "0";
    if (!playerArray[selectedIndex]) {
      setFilledBoxes((prevValue) => prevValue + 1);
    }
    setArray((prevArray) =>
      prevArray.map((box, index) =>
        index === selectedIndex ? (box ? box : currentPlayer) : box
      )
    );
    setPlayerx((prev) => !prev);
    setPalyery((prev) => !prev);
    setPlayerTurn((prevPlayer) => !prevPlayer);
  };

  const cancelClick = () => {
    setPopupStatus(null);
  };
  const playAgain = () => {
    setArray(Array(9).fill(""));
    setPlayerTurn(true);
    setFilledBoxes(0);
    setPopupStatus(null);
    setoverlay(null);
  };

  const renderBox = (index) => (
    <p
      className="text-green-600 bg-[#C4C4C4]
      p-2 h-[60px] w-[60px] rounded-xl flex items-center justify-center"
      key={index}
      onClick={() => handleEvent(index)}
    >
      <img
        src={
          playerArray[index] === "x"
            ? xSkin
            : playerArray[index] === "0"
            ? oSkin
            : null
        }
      />
    </p>
  );
  return (
    <>
      <div className="box flex items-center justify-center h-svh w-svw bg-gray-400 select-none">
        <div className="box flex flex-col items-center justify-center bg-gradient-to-b from-[#2f22c3] to-[#9e18c6]  w-[300px] h-[500px] rounded-xl">
          {/* this is the score board area */}
          <div
            className="flex
           justify-between w-[80%]"
          >
            <div
              className="flex flex-col items-center justify-center
            gap-3 "
            >
              <Players skin={xSkin} isPulsing={playerx} />
              <h1 className="text-white">{Xscore}</h1>
            </div>
            <div
              className="flex flex-col items-center justify-center
            gap-3"
            >
              <Players skin={oSkin} isPulsing={palyery} />
              <h1 className="text-white">{Oscore}</h1>
            </div>
          </div>
          <div
            className="flex
         flex-col gap-[30px] bg-[#391898] p-4 rounded-xl mt-[40px]"
          >
            {/* this is row */}
            <div
              className="flex gap-[20px]
           "
            >
              {renderBox(0)}
              {renderBox(1)}
              {renderBox(2)}
            </div>
            <div
              className="flex gap-[20px]
           "
            >
              {renderBox(3)}
              {renderBox(4)}
              {renderBox(5)}
            </div>
            <div
              className="flex gap-[20px]
           "
            >
              {renderBox(playerArray[6], 6)}
              {renderBox(playerArray[7], 7)}
              {renderBox(playerArray[8], 8)}
            </div>
          </div>

          {popupStatus && (
            <Popup
              status={popupStatus}
              cancelClick={cancelClick}
              playAgain={playAgain}
              draw={draw}
            />
          )}
          {overlay && <Overlay />}
        </div>
      </div>
    </>
  );
}

export default Gameplay;
