import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers"
import SlidePuzzleInstructions from "./SlidePuzzleInstructions";
import "./index.css";


function SlidingPuzzle() {
  const [imgUrl, setImgUrl] = useState("")
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"))
    }
  }, [])

  const handleImageChange = (e) => {
    setImgUrl(e.target.value)
    window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
  }

  return !gameStarted ? (
    <SlidePuzzleInstructions onProceed={() => setGameStarted(true)} />
  ):(
    <div className="App">
      <h1>React sliding puzzle</h1>
      <Board imgUrl={imgUrl} />
      <input value={imgUrl} onChange={handleImageChange} />
    </div>
  );
}

export default SlidingPuzzle;
