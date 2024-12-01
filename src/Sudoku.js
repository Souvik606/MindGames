import React, { useState, useEffect } from "react";

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
        className={`w-10 h-10 border text-center text-lg 
          ${isPrefilled ? "bg-gray-200" : "bg-white"}
          ${isError ? "bg-red-200 border-red-500" : ""}
          ${col % 3 === 2 && col !== 8 ? "border-r-2" : ""}
          ${row % 3 === 2 && row !== 8 ? "border-b-2" : ""}
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
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Sudoku Game</h1>
      <div className="grid grid-cols-9 gap-0">
        {grid.map((row, rowIndex) =>
          row.map((_, colIndex) => renderCell(rowIndex, colIndex))
        )}
      </div>
      <div className="mt-4 flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={checkGrid}
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default SudokuGame;
