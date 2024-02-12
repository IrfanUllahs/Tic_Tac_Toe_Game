const CheckWinner = (setPopupStatus, setoverlay, arrayPlayer, filledBoxes) => {
  if (
    arrayPlayer[0] === arrayPlayer[1] &&
    arrayPlayer[0] === arrayPlayer[2] &&
    arrayPlayer[0] !== ""
  ) {
    setPopupStatus(arrayPlayer[0] === "x" ? "Player x" : "Player 0");

    setoverlay(true);
  } else if (
    arrayPlayer[3] === arrayPlayer[4] &&
    arrayPlayer[3] === arrayPlayer[5] &&
    arrayPlayer[3] !== ""
  ) {
    setPopupStatus(arrayPlayer[3] === "x" ? "Player x" : "Player 0");
    setoverlay(true);
  } else if (
    arrayPlayer[6] === arrayPlayer[7] &&
    arrayPlayer[6] === arrayPlayer[8] &&
    arrayPlayer[6] !== ""
  ) {
    setPopupStatus(arrayPlayer[6] === "x" ? "Player x" : "Player 0");
    setoverlay(true);
  } else if (
    arrayPlayer[0] === arrayPlayer[3] &&
    arrayPlayer[0] === arrayPlayer[6] &&
    arrayPlayer[0] !== ""
  ) {
    setPopupStatus(arrayPlayer[0] === "x" ? "Player x" : "Player 0");
    setoverlay(true);
  } else if (
    arrayPlayer[1] === arrayPlayer[4] &&
    arrayPlayer[1] === arrayPlayer[7] &&
    arrayPlayer[1] !== ""
  ) {
    setPopupStatus(arrayPlayer[1] === "x" ? "Player x" : "Player 0");
    setoverlay(true);
  } else if (
    arrayPlayer[2] === arrayPlayer[5] &&
    arrayPlayer[2] === arrayPlayer[8] &&
    arrayPlayer[2] !== ""
  ) {
    setPopupStatus(arrayPlayer[2] === "x" ? "Player x" : "Player 0");
    setoverlay(true);
  } else if (
    arrayPlayer[0] === arrayPlayer[4] &&
    arrayPlayer[0] === arrayPlayer[8] &&
    arrayPlayer[0] !== ""
  ) {
    setPopupStatus(arrayPlayer[0] === "x" ? "Player x" : "Player 0");
    setoverlay(true);
  } else if (
    arrayPlayer[2] === arrayPlayer[4] &&
    arrayPlayer[2] === arrayPlayer[6] &&
    arrayPlayer[2] !== ""
  ) {
    setPopupStatus(arrayPlayer[2] === "x" ? "Player x" : "Player 0");
    setoverlay(true);
  } else if (filledBoxes >= 9) {
    setPopupStatus("Game Draw");
    setoverlay(true);
  }
};
export default CheckWinner;
