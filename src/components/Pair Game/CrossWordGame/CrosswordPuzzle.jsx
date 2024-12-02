import { useState } from "react";

const Crossword = () => {
  const grid = [
    ["E", "D", "I", "T", "", "U", "S", "E", "M", "E", "", "C", "A", "P", "E"],
    ["Y", "O", "G", "A", "", "N", "O", "T", "U", "P", "", "H", "I", "R", "E"],
    ["E", "V", "E", "R", "", "F", "R", "A", "N", "C", "", "I", "D", "O", "L"],
    ["D", "E", "T", "R", "O", "I", "T", "L", "I", "O", "N", "S", "", "", ""],
    ["", "", "", "A", "N", "T", "", "", "", "T", "E", "E", "N", "S", "Y"],
    ["I", "M", "A", "G", "E", "", "M", "A", "C", "", "E", "L", "O", "P", "E"],
    ["M", "A", "N", "O", "", "R", "E", "L", "O", "A", "D", "", "H", "A", "S"],
    ["P", "R", "I", "N", "C", "E", "T", "O", "N", "T", "I", "G", "E", "R", "S"],
    ["A", "I", "M", "", "A", "V", "E", "N", "G", "E", "", "E", "L", "S", "E"],
    ["I", "N", "A", "P", "T", "", "S", "E", "A", "", "R", "O", "P", "E", "S"],
    ["R", "E", "L", "I", "C", "S", "", "", "", "H", "I", "M", "", "", ""],
    ["", "", "", "C", "H", "I", "C", "A", "G", "O", "B", "E", "A", "R", "S"],
    ["B", "A", "R", "K", "", "N", "A", "S", "A", "L", "", "T", "R", "A", "Y"],
    ["O", "P", "A", "L", "", "U", "N", "T", "I", "L", "", "R", "E", "I", "N"],
    ["G", "E", "N", "E", "", "S", "T", "O", "N", "Y", "", "Y", "A", "L", "E"],
  ];

  const hints = {
    across: [
      { number: 1, row: 0, col: 0, clue: "Polish a manuscript" },
      { number: 5, row: 0, col: 5, clue: "'I can assist'" },
      { number: 10, row: 0, col: 11, clue: "Bullfighter's cloth" },
      { number: 14, row: 1, col: 0, clue: "Meditative exercise" },
      { number: 15, row: 1, col: 5, clue: "Still sleeping" },
      { number: 16, row: 1, col: 11, clue: "Add to the payroll" },
      { number: 17, row: 2, col: 0, clue: "'...happily __ after'" },
      { number: 18, row: 2, col: 5, clue: "Former Parisian money" },
      { number: 19, row: 2, col: 11, clue: "Revered one" },
      { number: 20, row: 3, col: 0, clue: "Michigan NFL team" },
      { number: 23, row: 4, col: 3, clue: "Insect in a colony" },
      { number: 24, row: 4, col: 9, clue: "Very small" },
      { number: 28, row: 5, col: 0, clue: "Mirror reflection" },
      { number: 31, row: 5, col: 6, clue: "__ and cheese (kids' lunch)" },
      { number: 34, row: 5, col: 10, clue: "Wed on the run" },
      { number: 35, row: 6, col: 0, clue: "__' War (legendary racehorse)" },
      { number: 36, row: 6, col: 5, clue: "Add fresh ammo" },
      { number: 38, row: 6, col: 12, clue: "Owns" },
      {
        number: 39,
        row: 7,
        col: 0,
        clue: "New Jersey Ivy League football team",
      },
      { number: 42, row: 8, col: 0, clue: "Point (at)" },
      { number: 43, row: 8, col: 4, clue: "Get even for" },
      { number: 44, row: 8, col: 11, clue: "'If all __ fails...'" },
      { number: 45, row: 9, col: 0, clue: "Not suitable" },
      { number: 47, row: 9, col: 4, clue: "Caribbean, for one" },
      { number: 48, row: 9, col: 10, clue: "Lariats" },
      { number: 49, row: 10, col: 0, clue: "Ancient artifacts" },
      { number: 51, row: 10, col: 9, clue: "That guy" },
      { number: 52, row: 11, col: 3, clue: "Illinois NFL team" },
      { number: 59, row: 12, col: 0, clue: "Dog's sound" },
      { number: 62, row: 12, col: 5, clue: "Twangy-sounding" },
      { number: 63, row: 12, col: 11, clue: "Cafeteria carrier" },
      { number: 64, row: 13, col: 0, clue: "Whitish gem" },
      { number: 65, row: 13, col: 5, clue: "No later than" },
      { number: 66, row: 13, col: 11, clue: "Bridle attachment" },
      { number: 67, row: 14, col: 0, clue: "Bit of DNA" },
      { number: 68, row: 14, col: 5, clue: "Full of rocks" },
      { number: 69, row: 14, col: 11, clue: "New Haven university" },
    ],
    down: [
      { number: 1, row: 0, col: 0, clue: "Watched closely" },
      { number: 2, row: 0, col: 1, clue: "Bird of peace" },
      { number: 3, row: 0, col: 2, clue: "'This is the thanks __?'" },
      { number: 4, row: 0, col: 3, clue: "Vinegar flavoring" },
      { number: 5, row: 0, col: 5, clue: "Not qualified" },
      { number: 6, row: 0, col: 6, clue: "Alphabetize" },
      { number: 7, row: 0, col: 7, clue: "And others: Abbr." },
      { number: 8, row: 0, col: 8, clue: "Tax-exempt bond, for short" },
      { number: 9, row: 0, col: 9, clue: "Florida Disney attraction" },
      { number: 10, row: 0, col: 11, clue: "Sculptor's tool" },
      { number: 11, row: 0, col: 12, clue: "Help out" },
      { number: 12, row: 0, col: 13, clue: "Quid __ quo" },
      { number: 13, row: 0, col: 14, clue: "Snakelike fish" },
      { number: 21, row: 3, col: 4, clue: "Small bill" },
      { number: 22, row: 3, col: 10, clue: "'__ say more?'" },
      { number: 25, row: 4, col: 12, clue: "Valueless, as a clue" },
      { number: 26, row: 4, col: 13, clue: "Few and far between" },
      { number: 27, row: 4, col: 14, clue: "Affirmative votes" },
      { number: 28, row: 5, col: 0, clue: "Undermine" },
      { number: 29, row: 5, col: 1, clue: "'Semper Fi' soldier" },
      { number: 30, row: 5, col: 2, clue: "Beast" },
      { number: 31, row: 5, col: 6, clue: "Doles (out)" },
      { number: 32, row: 5, col: 7, clue: "Solo" },
      { number: 33, row: 5, col: 8, clue: "Line dance" },
      { number: 36, row: 6, col: 5, clue: "Gun, as an engine" },
      { number: 37, row: 6, col: 9, clue: "Gobbled up" },
      { number: 40, row: 7, col: 4, clue: "Capture" },
      { number: 41, row: 7, col: 11, clue: "High school math" },
      { number: 46, row: 9, col: 3, clue: "Burger-relish source" },
      { number: 48, row: 9, col: 10, clue: "Bit of barbecue" },
      { number: 50, row: 10, col: 5, clue: "Nasal cavity" },
      { number: 51, row: 10, col: 9, clue: "'Deck the Halls' plant" },
      { number: 53, row: 11, col: 6, clue: "Is unable to" },
      { number: 54, row: 11, col: 7, clue: "Regarding" },
      { number: 55, row: 11, col: 8, clue: "Make progress" },
      { number: 56, row: 11, col: 12, clue: "Neck of the woods" },
      { number: 57, row: 11, col: 13, clue: "Banister" },
      { number: 58, row: 11, col: 14, clue: "'Auld Lang __'" },
      { number: 59, row: 12, col: 0, clue: "Swampy area" },
      { number: 60, row: 12, col: 1, clue: "Orangutan, for one" },
      { number: 61, row: 12, col: 2, clue: "Scampered away" },
    ],
  };

  const [answers, setAnswers] = useState(grid.map((row) => row.map(() => "")));
  const [isWinner, setIsWinner] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  const handleChange = (e, rowIndex, colIndex) => {
    const value = e.target.value.toUpperCase().slice(0, 1); // Limit to a single uppercase letter
    const newAnswers = answers.map((row, rIdx) =>
      row.map((cell, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? value : cell
      )
    );
    setAnswers(newAnswers);
    checkWin(newAnswers); // Immediately validate the updated answers
  };

  const checkWin = (userAnswers) => {
    // Check each cell against the solution
    const isCorrect = grid.every((row, rowIndex) =>
      row.every((cell, colIndex) => {
        // Allow empty cells (not part of the puzzle) to be ignored
        if (cell === "") return true;
        return userAnswers[rowIndex][colIndex] === grid[rowIndex][colIndex];
      })
    );
    setIsWinner(isCorrect);
  };

  const handleCellClick = (rowIndex, colIndex) => {
    setSelectedCell({ row: rowIndex, col: colIndex });
  };

  const getNumber = (rowIndex, colIndex) => {
    const across = hints.across.find(
      (hint) => hint.row === rowIndex && hint.col === colIndex
    );
    const down = hints.down.find(
      (hint) => hint.row === rowIndex && hint.col === colIndex
    );
    return across?.number || down?.number || null;
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-5 text-rose-600">
        Crossword Puzzle
      </h1>

      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Hints Section */}
        <div className="mb-5 md:mb-0">
          <h2 className="text-3xl font-bold mb-3 text-rose-700">Hints</h2>
          <div className="flex flex-wrap">
            <div>
              <h3 className="font-bold text-2xl">Across</h3>
              <ul className="ml-5 mb-3 text-xl list-outside">
                {hints.across.map((hint) => (
                  <li key={hint.number} className="list-item">
                    <span className="font-bold">{hint.number}.</span>{" "}
                    {hint.clue}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl">Down</h3>
              <ul className="ml-5 text-xl list-outside list">
                {hints.down.map((hint) => (
                  <li key={hint.number} className="list-item">
                    <span className="font-bold">{hint.number}.</span>{" "}
                    {hint.clue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Crossword Grid */}
        <div
          className={`flex flex-col h-max items-center border-rose-700 border-2 ${
            isWinner && "pointer-events-none"
          }`}
        >
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center">
              {row.map((cell, colIndex) => (
                <div
                  className="relative p-2 bg-rose-50 border-rose-700 border-2 overflow-clip"
                  key={`${rowIndex}-${colIndex}`}
                >
                  {/* Display number if it's the start of a word */}
                  {getNumber(rowIndex, colIndex) && (
                    <span className="absolute top-1 left-1 text-xs font-bold">
                      {getNumber(rowIndex, colIndex)}
                    </span>
                  )}
                  {cell === "" ? (
                    <div className="w-10 h-10 bg-rose-700 shadow-[0_0_0_1rem_#be123c] pointer-events-none"></div>
                  ) : (
                    <input
                      type="text"
                      maxLength="1"
                      value={answers[rowIndex][colIndex]}
                      onChange={(e) => handleChange(e, rowIndex, colIndex)}
                      onClick={() => handleCellClick(rowIndex, colIndex)}
                      className={`w-10 h-10 text-center text-2xl font-bold 
                        bg-rose-50 focus:outline-none focus:border-blue-500 text-rose-950`}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {isWinner && (
        <div className="text-green-600 font-bold text-2xl mb-5 py-10">
          🎉 Congratulations! You solved the crossword! 🎉
        </div>
      )}
    </div>
  );
};

export default Crossword;
