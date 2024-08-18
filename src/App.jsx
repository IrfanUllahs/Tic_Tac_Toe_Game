import React from "react";
import { useState } from "react";
import Gameplay from "./components/Gameplay/Gameplay";
import StartGame from "./components/startGame/StartGame";
import Selectcategory from "./components/SelectGame/Selectcategory";
import SinglePlayers from "./components/Gameplay/SinglePlayerGame";
export default function App() {
  const [isGameOn, setisGameOn] = useState(false);
  const [gamePlay, setgameplay] = useState(false);
  const [singlePlayer, setsinglePlayer] = useState(false);
  const [twoPlayer, setTwoPlayer] = useState(false);
  const startGame = () => {
    setisGameOn((prev) => !prev);
  };
  const GameOn = (value) => {
    setgameplay(true);
    if (value == "single") {
      setsinglePlayer(true);
    }
  };
  return (
    <>
      {isGameOn
        ? !gamePlay && <Selectcategory GameOn={GameOn} />
        : !gamePlay && <StartGame startGame={startGame} />}
      {gamePlay && !singlePlayer ? <Gameplay /> : <SinglePlayers />}
    </>
  );
}
