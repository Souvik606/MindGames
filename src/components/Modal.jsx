import React from "react";

function Modal({ moves, time, onRestart }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-2xl mb-4">🎉 Congratulations! 🎉</h2>
        <p className="mb-2">You completed the game!</p>
        <p className="mb-2">Moves: {moves}</p>
        <p className="mb-4">Time: {time}s</p>
        <button
          onClick={onRestart}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Modal;
