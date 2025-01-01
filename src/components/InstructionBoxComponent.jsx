import React from "react";

function InstructionBoxComponent({ onProceed, color, rules }) {
  return (
    <div
      className={`min-h-dvh bg-gradient-to-br from-${color}-200 via-${color}-300 to-${color}-400 relative flex items-center justify-center overflow-hidden`}
    >
      <div
        className={`absolute lg:block hidden bg-${color}-400 rounded-full w-96 h-96 opacity-30 top-100 -left-20`}
      />
      <div
        className={`absolute lg:block hidden bg-${color}-500 rounded-full w-80 h-80 opacity-20 bottom-10 right-10`}
      />
      <div
        className={`absolute lg:block hidden bg-${color}-600 rounded-full w-64 h-64 opacity-15 -top-36 left-[850px]`}
      />

      <div className="relative mx-6 bg-white shadow-2xl rounded-3xl p-8 max-w-lg text-center overflow-hidden z-10">
        <div
          className={`absolute bg-${color}-400 rounded-full w-32 h-32 opacity-30 -top-10 -left-10`}
        />
        <div
          className={`absolute bg-${color}-500 rounded-full w-40 h-40 opacity-20 -bottom-16 right-0`}
        />

        <h1
          className={`relative text-5xl font-bold text-${color}-700 mb-10 z-20`}
        >
          How to Play
        </h1>
        <ul
          className={`relative text-${color}-900 text-xl font-bold text-left list-decimal list-inside mb-6 z-20`}
        >
          {rules.map((rule, idx) => (
            <li className="pb-4" key={idx}>
              {rule}
            </li>
          ))}
        </ul>
        <button
          onClick={onProceed}
          className={`relative bg-${color}-700 text-white text-xl font-bold px-10 py-4 rounded-full hover:bg-${color}-900 transition duration-200 z-20`}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default InstructionBoxComponent;
