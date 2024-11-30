import React from "react";

function InstructionBox({ onProceed }) {
  return (
    <div className="min-h-screen bg-purple-200 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-3xl p-8 max-w-lg text-center">
        <h1 className="text-5xl font-bold text-purple-700 mb-10">How to Play</h1>
        <ul className="text-purple-900 text-xl font-semibold text-left list-decimal list-inside mb-6">
          <li className="pb-4 font-bold">Match all the pairs of cards to win the game.</li>
          <li className="pb-4 font-bold">Click on a card to flip it and reveal its value.</li>
          <li className="pb-4 font-bold">If two flipped cards match, they remain flipped.</li>
          <li className="pb-4 font-bold">If they don’t match, they will flip back after a short delay.</li>
          <li className="pb-4 font-bold">Choose difficulty: Easy (4x4), Medium (6x6), Hard (8x8).</li>
          <li className="pb-4 font-bold">Try to complete the game in as few moves as possible!</li>
        </ul>
        <button
          onClick={onProceed}
          className="bg-purple-700 text-white text-xl font-bold px-10 py-4 rounded-full hover:bg-purple-800 transition duration-200"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default InstructionBox;
