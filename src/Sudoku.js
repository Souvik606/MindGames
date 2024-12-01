import React, { useState, useEffect } from "react";
import SudokuInstructions from "./components/Pair Game/SudokuGame/InstructionBox";

const SudokuGame = () => {
  const initialPuzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const [grid, setGrid] = useState(initialPuzzle);
  const [errors, setErrors] = useState([]);
  const [solvedBoard, setSolvedBoard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showInstructions,setShowInstructions]=useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const isValid = (grid, row, col, num) => {
    for (let x = 0; x < 9; x++) {
      if (grid[row][x] === num || grid[x][col] === num) return false;
      if (
        grid[3 * Math.floor(row / 3) + Math.floor(x / 3)][
          3 * Math.floor(col / 3) + (x % 3)
        ] === num
      )
        return false;
    }
    return true;
  };

  const solveSudoku = (grid) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(grid, row, col, num)) {
              grid[row][col] = num;
              if (solveSudoku(grid)) return true;
              grid[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  useEffect(() => {
    const gridCopy = initialPuzzle.map((row) => [...row]);
    solveSudoku(gridCopy);
    setSolvedBoard(gridCopy);
  }, []);

  const checkGrid = () => {
    const newErrors = [];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] !== 0 && grid[row][col] !== solvedBoard[row][col]) {
          newErrors.push({ row, col });
        }
      }
    }
    setErrors(newErrors);
  };

  const handleInputChange = (row, col, value) => {
    const newGrid = grid.map((rowArr, i) =>
      rowArr.map((cell, j) => (i === row && j === col ? value : cell))
    );
    setGrid(newGrid);
    setErrors([]);

    if (grid[row][col] === 0 && value !== 0) {
      setMoves((prev) => prev + 1);
    }
  };

  const renderCell = (row, col) => {
    const isError = errors.some((error) => error.row === row && error.col === col);
    const isPrefilled = initialPuzzle[row][col] !== 0;

    return (
      <input
        key={`${row}-${col}`}
        type="text"
        maxLength={1}
        disabled={isPrefilled}
        className={`w-12 h-12 border text-center text-lg rounded-md
          ${isPrefilled ? "bg-blue-800 text-blue-100 font-bold" : "bg-white"}
          ${isError ? "bg-red-200 border-red-500" : "border-blue-300"}
          focus:outline-none focus:ring-2 focus:ring-blue-400
           transition-colors duration-150
        `}
        value={grid[row][col] || ""}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          if (!isNaN(value) && value >= 1 && value <= 9) {
            handleInputChange(row, col, value);
          } else if (e.target.value === "") {
            handleInputChange(row, col, 0);
          }
        }}
      />
    );
  };



  return (
    <>
    {showInstructions?<SudokuInstructions onProceed={()=>{setShowInstructions(false)}}/>:
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 min-h-screen py-5">
      <div className="absolute lg:block hidden bg-blue-400 rounded-full w-96 h-96 opacity-30 top-100 -left-20"></div>
      <div className="absolute lg:block hidden bg-blue-500 rounded-full w-80 h-80 opacity-20 bottom-10 right-10"></div>
      <div className="absolute lg:block hidden bg-blue-600 rounded-full w-64 h-64 opacity-15 -top-36 left-[850px]"></div>
      <div className="bg-white z-10 px-10 py-4 rounded-3xl ">
      <h1 className="text-4xl text-center font-extrabold text-blue-600 mb-4">Sudoku Master</h1>
      <div className="flex justify-between items-center pt-6 w-full max-w-xl px-4 mb-6 text-blue-600 font-medium">
        <p className="text-3xl font-bold">Moves:{moves}</p>
        <p className="text-3xl font-bold">Timer:{formatTime(elapsedTime)}</p>
        <button
          className="px-8 py-3 bg-blue-600 text-white text-xl font-bold rounded-full shadow hover:bg-blue-700 transition-colors duration-150"
          onClick={checkGrid}
        >
          Check
        </button>
      </div>
      <div className="grid grid-cols-9 gap-1 border-4 border-blue-500 rounded-lg p-4 bg-white shadow-lg">
        {grid.map((row, rowIndex) =>
          row.map((_, colIndex) => renderCell(rowIndex, colIndex))
        )}
      </div>
      </div>
    </div>
}
    </>
  );
};

export default SudokuGame;
