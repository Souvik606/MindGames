import React, { useState, useEffect } from "react";
import CompletionModal from "./CompletionModal";
import WordSearchInstructions from "./InstructionBox";

const WordSearchGame = () => {
  const grid = [
    ["Q", "Z", "T", "L", "S", "L", "S", "S", "J", "T"],
    ["Y", "I", "S", "R", "F", "C", "A", "U", "E", "S"],
    ["G", "M", "O", "W", "A", "V", "N", "N", "N", "T"],
    ["M", "L", "E", "T", "N", "G", "A", "I", "K", "U"],
    ["R", "T", "F", "A", "U", "W", "E", "N", "O", "D"],
    ["W", "E", "C", "Y", "L", "L", "B", "D", "O", "Y"],
    ["S", "E", "B", "T", "L", "X", "B", "H", "Y", "H"],
    ["A", "R", "Z", "O", "H", "R", "X", "X", "E", "Y"],
    ["S", "G", "R", "S", "P", "I", "N", "T", "F", "N"],
    ["X", "D", "Q", "B", "R", "E", "P", "O", "R", "T"],
  ];

  const solutionGrid = [
    [-1, -1, 8, -1, -1, -1, -1, 0, -1, 4],
    [-1, -1, -1, 8, -1, -1, 0, -1, 4, 7],
    [-1, -1, -1, -1, 8, 0, -1, 4, -1, 7],
    [-1, -1, -1, -1, 0, 8, -1, -1, -1, 7],
    [-1, 2, -1, 0, -1, -1, 8, -1, -1, 7],
    [-1, 2, 0, -1, -1, 1, -1, 8, -1, 7],
    [-1, 2, -1, -1, 1, -1, -1, 3, 8, -1],
    [-1, 2, -1, 1, -1, -1, -1, -1, 3, -1],
    [-1, 2, 1, 6, 6, 6, 6, -1, -1, 3],
    [-1, 1, -1, -1, 5, 5, 5, 5, 5, 5],
  ];

  const wordsToFind = [
    "CANVAS",
    "DROLL",
    "GREET",
    "HEN",
    "NET",
    "REPORT",
    "SPIN",
    "STUDY",
    "TRAGEDY",
  ];
  const [clickedCells, setClickedCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  const keySound = new Audio("/sounds/type.wav");

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval;
    if (!showInstructions && !isModalOpen) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showInstructions, isModalOpen]);

  useEffect(() => {
    if (foundWords.length === wordsToFind.length) {
      setIsModalOpen(true);
    }
  }, [foundWords]);

  // play sound on click or match
  const handleCellClick = (row, col) => {
    const wordIndex = solutionGrid[row][col];

    keySound.play();
    const isAlreadyClicked = clickedCells.some(
      (cell) => cell.row === row && cell.col === col
    );

    if (isAlreadyClicked) {
      setClickedCells((prev) =>
        prev.filter((cell) => cell.row !== row || cell.col !== col)
      );
      return;
    }

    const newClickedCells = [...clickedCells, { row, col, wordIndex }];
    setClickedCells(newClickedCells);

    const wordCells = [];
    solutionGrid.forEach((rowArr, rowIndex) => {
      rowArr.forEach((cellValue, colIndex) => {
        if (cellValue === wordIndex) {
          wordCells.push({ row: rowIndex, col: colIndex });
        }
      });
    });

    const isWordFound = wordCells.every((cell) =>
      newClickedCells.some(
        (clickedCell) =>
          clickedCell.row === cell.row && clickedCell.col === cell.col
      )
    );

    if (isWordFound) {
      setFoundWords((prev) => [...prev, wordIndex]);

      const remainingClickedCells = newClickedCells.filter(
        (clickedCell) => clickedCell.wordIndex !== wordIndex
      );
      setClickedCells(remainingClickedCells);

      // play sound if word fount
      const wordFoundSound = new Audio("/sounds/matching.wav");
      wordFoundSound.play();
    }
  };

  const isCellInFoundWord = (row, col) => {
    const wordIndex = solutionGrid[row][col];
    return foundWords.includes(wordIndex);
  };

  const isCellClicked = (row, col) => {
    return clickedCells.some((cell) => cell.row === row && cell.col === col);
  };

  const resetGame = () => {
    setFoundWords([]);
    setClickedCells([]);
    setTimer(0);
    setIsModalOpen(false);
  };

  return (
    <>
      {showInstructions ? (
        <WordSearchInstructions onProceed={() => setShowInstructions(false)} />
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 flex items-center justify-center p-5">
          <div className="absolute lg:block hidden bg-orange-400 rounded-full w-96 h-96 opacity-30 top-100 -left-20"></div>
          <div className="absolute lg:block hidden bg-orange-500 rounded-full w-80 h-80 opacity-20 bottom-10 right-10"></div>
          <div className="absolute lg:block hidden bg-orange-600 rounded-full w-64 h-64 opacity-15 -top-36 left-[850px]"></div>

          <div className="bg-white z-10 p-5 rounded-2xl shadow-lg max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5">
            <div className="flex-1 p-4 rounded-lg shadow-md bg-white border-4 border-orange-300">
              <div className="flex justify-between px-6">
                <h1 className="text-3xl font-bold text-orange-600 mb-4 text-center">
                  Word Search
                </h1>
                <h1 className="text-3xl font-bold text-orange-600 mb-4 text-center">
                  Timer: {formatTime(timer)}
                </h1>
              </div>
              <div className="grid grid-cols-10 gap-2">
                {grid.map((row, rowIndex) =>
                  row.map((letter, colIndex) => (
                    <button
                      key={`${rowIndex}-${colIndex}`}
                      onClick={() => handleCellClick(rowIndex, colIndex)}
                      className={`w-12 h-12 flex justify-center items-center font-bold text-lg rounded transition-all duration-200 ease-in-out ${
                        isCellInFoundWord(rowIndex, colIndex)
                          ? "bg-orange-700 text-white cursor-default"
                          : isCellClicked(rowIndex, colIndex)
                          ? "bg-orange-400 text-white"
                          : "bg-orange-100 text-orange-900 hover:bg-orange-200"
                      }`}
                    >
                      {letter}
                    </button>
                  ))
                )}
              </div>
            </div>
            <div className="flex-col justify-center items-center p-4 rounded-lg shadow-md bg-white border-4 border-orange-300">
              <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center">
                Words to Find
              </h2>
              <ul className="flex lg:flex-col justify-center items-center flex-wrap gap-3">
                {wordsToFind.map((word, index) => (
                  <li
                    key={word}
                    className={`text-lg font-semibold ${
                      foundWords.includes(index)
                        ? "text-orange-800 line-through"
                        : "text-orange-600"
                    }`}
                  >
                    {word}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <CompletionModal
            isOpen={isModalOpen}
            time={timer}
            onPlayAgain={resetGame}
          />
        </div>
      )}
    </>
  );
};

export default WordSearchGame;
