import React from "react";

function WordSearchInstructions({ onProceed }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 relative flex items-center justify-center overflow-hidden">
      <div className="absolute lg:block hidden bg-yellow-400 rounded-full w-96 h-96 opacity-30 top-100 -left-20"></div>
      <div className="absolute lg:block hidden bg-yellow-500 rounded-full w-80 h-80 opacity-20 bottom-10 right-10"></div>
      <div className="absolute lg:block hidden bg-yellow-600 rounded-full w-64 h-64 opacity-15 -top-36 left-[850px]"></div>

      <div className="relative bg-white shadow-2xl rounded-3xl p-8 max-w-lg text-center overflow-hidden z-10">
        <div className="absolute bg-yellow-400 rounded-full w-32 h-32 opacity-30 -top-10 -left-10"></div>
        <div className="absolute bg-yellow-500 rounded-full w-40 h-40 opacity-20 -bottom-16 right-0"></div>

        <h1 className="relative text-5xl font-bold text-yellow-700 mb-10 z-20">
          How to Play
        </h1>
        <ul className="relative text-yellow-900 text-xl font-bold text-left list-decimal list-inside mb-6 z-20">
          <li className="pb-4">Find all the hidden words in the grid.</li>
          <li className="pb-4">Words can be placed horizontally, vertically, or diagonally.</li>
          <li className="pb-4">Use the list of words to guide you through the grid.</li>
          <li className="pb-4">You can click and drag to select the words in the grid.</li>
          <li className="pb-4">Complete the word search to win!</li>
        </ul>
        <button
          onClick={onProceed}
          className="relative bg-yellow-700 text-white text-xl font-bold px-10 py-4 rounded-full hover:bg-yellow-800 transition duration-200 z-20"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default WordSearchInstructions;
