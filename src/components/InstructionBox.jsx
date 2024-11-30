import React from "react";

function InstructionBox({ onProceed }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 relative flex items-center justify-center overflow-hidden">
      {/* Large circles for large screens */}
      <div className="absolute lg:block hidden bg-purple-400 rounded-full w-96 h-96 opacity-30 top-100 -left-20"></div>
      <div className="absolute lg:block hidden bg-purple-500 rounded-full w-80 h-80 opacity-20 bottom-10 right-10"></div>
      <div className="absolute lg:block hidden bg-purple-600 rounded-full w-64 h-64 opacity-15 -top-36 left-[850px]"></div>

      <div className="relative bg-white shadow-2xl rounded-3xl p-8 max-w-lg text-center overflow-hidden z-10">
        {/* Circles inside the box for overlapping */}
        <div className="absolute bg-purple-400 rounded-full w-32 h-32 opacity-30 -top-10 -left-10"></div>
        <div className="absolute bg-purple-500 rounded-full w-40 h-40 opacity-20 -bottom-16 right-0"></div>

        <h1 className="relative text-5xl font-bold text-purple-700 mb-10 z-20">
          How to Play
        </h1>
        <ul className="relative text-purple-900 text-xl font-bold text-left list-decimal list-inside mb-6 z-20">
          <li className="pb-4">Match all the pairs of cards to win the game.</li>
          <li className="pb-4">Click on a card to flip it and reveal its value.</li>
          <li className="pb-4">If two flipped cards match, they remain flipped.</li>
          <li className="pb-4">
            If they don’t match, they will flip back after a short delay.
          </li>
          <li className="pb-4">
            Choose difficulty: Easy (4x4), Medium (6x6), Hard (8x8).
          </li>
          <li className="pb-4">
            Try to complete the game in as few moves as possible!
          </li>
        </ul>
        <button
          onClick={onProceed}
          className="relative bg-purple-700 text-white text-xl font-bold px-10 py-4 rounded-full hover:bg-purple-800 transition duration-200 z-20"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default InstructionBox;
