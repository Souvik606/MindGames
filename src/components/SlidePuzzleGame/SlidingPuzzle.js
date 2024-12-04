import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers"
import SlidePuzzleInstructions from "./SlidePuzzleInstructions";
import "./SlidePuzzle.css";


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
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 flex flex-col items-center p-4">
      <div className="absolute lg:block hidden bg-yellow-400 rounded-full w-96 h-96 opacity-30 top-100 -left-20"></div>
      <div className="absolute lg:block hidden bg-yellow-500 rounded-full w-80 h-80 opacity-20 bottom-10 right-10"></div>
      <div className="absolute lg:block hidden bg-yellow-600 rounded-full w-64 h-64 opacity-15 -top-36 left-[850px]"></div>
      {/* <div className="bg-white m-2 z-10 px-6 py-3 my-auto rounded-3xl shadow-xl"></div> */}
    <div className="App">
      <h1>Challenge Your Brain: Sliding Puzzle</h1>
      <p>
        Rearrange the pieces of the image to recreate the original picture! Use the blank space to slide pieces into place.
      </p>
      <div >
        <Board imgUrl={imgUrl} />
      </div>
      <input value={imgUrl} onChange={handleImageChange} placeholder="Enter image URL" />
    </div>
    </div>
  );
}

export default SlidingPuzzle;
