import React from "react";

function CrosswordInstructions({ onProceed }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400 relative flex items-center justify-center overflow-hidden">
      <div className="absolute lg:block hidden bg-rose-400 rounded-full w-96 h-96 opacity-30 top-100 -left-20"></div>
      <div className="absolute lg:block hidden bg-rose-500 rounded-full w-80 h-80 opacity-20 bottom-10 right-10"></div>
      <div className="absolute lg:block hidden bg-rose-600 rounded-full w-64 h-64 opacity-15 -top-36 left-[850px]"></div>

      <div className="relative bg-white shadow-2xl rounded-3xl p-8 max-w-lg text-center overflow-hidden z-10">
        <div className="absolute bg-rose-400 rounded-full w-32 h-32 opacity-30 -top-10 -left-10"></div>
        <div className="absolute bg-rose-500 rounded-full w-40 h-40 opacity-20 -bottom-16 right-0"></div>

        <h1 className="relative text-5xl font-bold text-rose-700 mb-10 z-20">
          How to Play
        </h1>
        <ul className="relative text-rose-900 text-xl font-bold text-left list-decimal list-inside mb-6 z-20">
          <li className="pb-4">
            Fill the grid with the correct words based on the clues provided.
          </li>
          <li className="pb-4">
            Clues are available for both "Across" and "Down" directions.
          </li>
          <li className="pb-4">
            Click on an empty cell to start typing your answer.
          </li>
          <li className="pb-4">
            The number will show up in the top-left corner of each starting
            cell.
          </li>
          <li className="pb-4">
            Complete the crossword without any mistakes to win!
          </li>
        </ul>
        <button
          onClick={onProceed}
          className="relative bg-rose-700 text-white text-xl font-bold px-10 py-4 rounded-full hover:bg-rose-800 transition duration-200 z-20"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default CrosswordInstructions;
