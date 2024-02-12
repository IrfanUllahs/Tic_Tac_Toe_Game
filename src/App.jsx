import React from "react";
import { useState } from "react";
import Gameplay from "./components/Gameplay/Gameplay";
import StartGame from "./components/startGame/StartGame";
import SelectGame from "./components/SelectGame/SelectGame";

export default function App() {
  const [isGameOn, setisGameOn] = useState(false);
  const [gamePaly, setgameplay] = useState(false);
  const startGame = () => {
    setisGameOn((prev) => !prev);
  };
  const GameOn = () => {
    setgameplay(true);
  };
  return (
    <>
      {isGameOn
        ? !gamePaly && <SelectGame GameOn={GameOn} />
        : !gamePaly && <StartGame startGame={startGame} />}
      {gamePaly && <Gameplay setgameplay={setgameplay} />}
    </>
  );
}
