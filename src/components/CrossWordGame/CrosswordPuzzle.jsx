
import { useEffect, useState } from "react";
import CrosswordInstructions from "./CrosswordInstructions";

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
    { number: 1, row: 0, col: 0, clue: "Polish a manuscript", word: "EDIT" },
    { number: 5, row: 0, col: 5, clue: "'I can assist'", word: "USEME" },
    {
      number: 10,
      row: 0,
      col: 11,
      clue: "Bullfighter's cloth",
      word: "CAPE",
    },
    { number: 14, row: 1, col: 0, clue: "Meditative exercise", word: "YOGA" },
    { number: 15, row: 1, col: 5, clue: "Still sleeping", word: "NOTUP" },
    { number: 16, row: 1, col: 11, clue: "Add to the payroll", word: "HIRE" },
    {
      number: 17,
      row: 2,
      col: 0,
      clue: "'...happily __ after'",
      word: "EVER",
    },
    {
      number: 18,
      row: 2,
      col: 5,
      clue: "Former Parisian money",
      word: "FRANC",
    },
    { number: 19, row: 2, col: 11, clue: "Revered one", word: "IDOL" },
    {
      number: 20,
      row: 3,
      col: 0,
      clue: "Michigan NFL team",
      word: "DETROITLIONS",
    },
    { number: 23, row: 4, col: 3, clue: "Insect in a colony", word: "ANT" },
    { number: 24, row: 4, col: 9, clue: "Very small", word: "TEENSY" },
    { number: 28, row: 5, col: 0, clue: "Mirror reflection", word: "IMAGE" },
    {
      number: 31,
      row: 5,
      col: 6,
      clue: "__ and cheese (kids' lunch)",
      word: "MAC",
    },
    { number: 34, row: 5, col: 10, clue: "Wed on the run", word: "ELOPE" },
    {
      number: 35,
      row: 6,
      col: 0,
      clue: "__' War (legendary racehorse)",
      word: "MANO",
    },
    { number: 36, row: 6, col: 5, clue: "Add fresh ammo", word: "RELOAD" },
    { number: 38, row: 6, col: 12, clue: "Owns", word: "HAS" },
    {
      number: 39,
      row: 7,
      col: 0,
      clue: "New Jersey Ivy League football team",
      word: "PRINCETONTIGERS",
    },
    { number: 42, row: 8, col: 0, clue: "Point (at)", word: "AIM" },
    { number: 43, row: 8, col: 4, clue: "Get even for", word: "AVENGE" },
    {
      number: 44,
      row: 8,
      col: 11,
      clue: "'If all __ fails...'",
      word: "ELSE",
    },
    { number: 45, row: 9, col: 0, clue: "Not suitable", word: "INAPT" },
    { number: 47, row: 9, col: 4, clue: "Caribbean, for one", word: "SEA" },
    { number: 48, row: 9, col: 10, clue: "Lariats", word: "ROPES" },
    {
      number: 49,
      row: 10,
      col: 0,
      clue: "Ancient artifacts",
      word: "RELICS",
    },
    { number: 51, row: 10, col: 9, clue: "That guy", word: "HIM" },
    {
      number: 52,
      row: 11,
      col: 3,
      clue: "Illinois NFL team",
      word: "CHICAGOBEARS",
    },
    { number: 59, row: 12, col: 0, clue: "Dog's sound", word: "BARK" },
    { number: 62, row: 12, col: 5, clue: "Twangy-sounding", word: "NASAL" },
    { number: 63, row: 12, col: 11, clue: "Cafeteria carrier", word: "TRAY" },
    { number: 64, row: 13, col: 0, clue: "Whitish gem", word: "OPAL" },
    { number: 65, row: 13, col: 5, clue: "No later than", word: "UNTIL" },
    { number: 66, row: 13, col: 11, clue: "Bridle attachment", word: "REIN" },
    { number: 67, row: 14, col: 0, clue: "Bit of DNA", word: "GENE" },
    { number: 68, row: 14, col: 5, clue: "Full of rocks", word: "STONY" },
    {
      number: 69,
      row: 14,
      col: 11,
      clue: "New Haven university",
      word: "YALE",
    },
  ],
  down: [
    { number: 1, row: 0, col: 0, clue: "Watched closely", word: "EYED" },
    { number: 2, row: 0, col: 1, clue: "Bird of peace", word: "DOVE" },
    {
      number: 3,
      row: 0,
      col: 2,
      clue: "'This is the thanks __?'",
      word: "IGET",
    },
    { number: 4, row: 0, col: 3, clue: "Vinegar flavoring", word: "TARR" },
    { number: 5, row: 0, col: 5, clue: "Not qualified", word: "UNFIT" },
    { number: 6, row: 0, col: 6, clue: "Alphabetize", word: "SORT" },
    { number: 7, row: 0, col: 7, clue: "And others: Abbr.", word: "ETA" },
    {
      number: 8,
      row: 0,
      col: 8,
      clue: "Tax-exempt bond, for short",
      word: "MUNI",
    },
    {
      number: 9,
      row: 0,
      col: 9,
      clue: "Florida Disney attraction",
      word: "EPCOT",
    },
    { number: 10, row: 0, col: 11, clue: "Sculptor's tool", word: "CHISEL" },
    { number: 11, row: 0, col: 12, clue: "Help out", word: "AID" },
    { number: 12, row: 0, col: 13, clue: "Quid __ quo", word: "PRO" },
    { number: 13, row: 0, col: 14, clue: "Snakelike fish", word: "EEL" },
    { number: 21, row: 3, col: 4, clue: "Small bill", word: "ONE" },
    { number: 22, row: 3, col: 10, clue: "'__ say more?'", word: "NEEDI" },
    {
      number: 25,
      row: 4,
      col: 12,
      clue: "Valueless, as a clue",
      word: "NOHELP",
    },
    {
      number: 26,
      row: 4,
      col: 13,
      clue: "Few and far between",
      word: "SPARSE",
    },
    {
      number: 27,
      row: 4,
      col: 14,
      clue: "Affirmative votes",
      word: "YESSES",
    },
    { number: 28, row: 5, col: 0, clue: "Undermine", word: "IMPAIR" },
    {
      number: 29,
      row: 5,
      col: 1,
      clue: "'Semper Fi' soldier",
      word: "MARINE",
    },
    { number: 30, row: 5, col: 2, clue: "Beast", word: "ANIMAL" },
    { number: 31, row: 5, col: 6, clue: "Doles (out)", word: "METES" },
    { number: 32, row: 5, col: 7, clue: "Solo", word: "ALONE" },
    { number: 33, row: 5, col: 8, clue: "Line dance", word: "CONGA" },
    { number: 36, row: 6, col: 5, clue: "Gun, as an engine", word: "REV" },
    { number: 37, row: 6, col: 9, clue: "Gobbled up", word: "ATE" },
    { number: 40, row: 7, col: 4, clue: "Capture", word: "CATCH" },
    {
      number: 41,
      row: 7,
      col: 11,
      clue: "High school math",
      word: "GEOMETRY",
    },
    {
      number: 46,
      row: 9,
      col: 3,
      clue: "Burger-relish source",
      word: "PICKLE",
    },
    { number: 48, row: 9, col: 10, clue: "Bit of barbecue", word: "RIB" },
    { number: 50, row: 10, col: 5, clue: "Nasal cavity", word: "SINUS" },
    {
      number: 51,
      row: 10,
      col: 9,
      clue: "'Deck the Halls' plant",
      word: "HOLLY",
    },
    { number: 53, row: 11, col: 6, clue: "Is unable to", word: "CANT" },
    { number: 54, row: 11, col: 7, clue: "Regarding", word: "ASTO" },
    { number: 55, row: 11, col: 8, clue: "Make progress", word: "GAIN" },
    { number: 56, row: 11, col: 12, clue: "Neck of the woods", word: "AREA" },
    { number: 57, row: 11, col: 13, clue: "Banister", word: "RAIL" },
    { number: 58, row: 11, col: 14, clue: "'Auld Lang __'", word: "SYNE" },
    { number: 59, row: 12, col: 0, clue: "Swampy area", word: "BOG" },
    { number: 60, row: 12, col: 1, clue: "Orangutan, for one", word: "APE" },
    { number: 61, row: 12, col: 2, clue: "Scampered away", word: "RAN" },
  ],
};

const Crossword = () => {
  const [answers, setAnswers] = useState(grid.map((row) => row.map(() => "")));
  const [isWinner, setIsWinner] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const keySound = new Audio("/sounds/type.wav");
  const [gameStarted, setGameStarted] = useState(false);

  const [completedHints, setCompletedHints] = useState({
    across: [],
    down: [],
  });

  const checkWordCompletion = (row, col, direction, word, number) => {
    if (direction === "across") {
      let userWord = "";
      for (let index = 0; index < word.length; index++) {
        userWord += answers[row][col + index];
      }

      setCompletedHints((prevHints) => {
        const isCompleted = userWord === word;
        const isAlreadyInList = prevHints.across.includes(number);

        return {
          ...prevHints,
          across: isCompleted
            ? isAlreadyInList
              ? prevHints.across
              : [...prevHints.across, number] // Add the number if the word is completed
            : prevHints.across.filter((n) => n !== number), // Remove the number if the word is not completed
        };
      });
    } else if (direction === "down") {
      let userWord = "";
      for (let index = 0; index < word.length; index++) {
        userWord += answers[row + index][col];
      }

      setCompletedHints((prevHints) => {
        const isCompleted = userWord === word;
        const isAlreadyInList = prevHints.down.includes(number);

        return {
          ...prevHints,
          down: isCompleted
            ? isAlreadyInList
              ? prevHints.down
              : [...prevHints.down, number] // Add the number if the word is completed
            : prevHints.down.filter((n) => n !== number), // Remove the number if the word is not completed
        };
      });
    }
  };

  const handleChange = (e, rowIndex, colIndex) => {
    const value = e.target.value.toUpperCase().slice(0, 1);
    keySound.play();

    const newAnswers = answers.map((row, rIdx) =>
      row.map((cell, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? value : cell
      )
    );

    setAnswers(newAnswers);
    checkWin(newAnswers);

    for (let i = 0; i < hints.across.length; i++) {
      const hint = hints.across[i];

      checkWordCompletion(hint.row, hint.col, "across", hint.word, hint.number);
    }

    for (let i = 0; i < hints.down.length; i++) {
      const hint = hints.down[i];

      checkWordCompletion(hint.row, hint.col, "down", hint.word, hint.number);
    }
  };

  const checkWin = (userAnswers) => {
    const isCorrect = grid.every((row, rowIndex) =>
      row.every((cell, colIndex) => {
        if (cell === "") return true;
        return userAnswers[rowIndex][colIndex] === grid[rowIndex][colIndex];
      })
    );
    setIsWinner(isCorrect);
  };

  const resetGame = () => {
    setAnswers(grid.map((row) => row.map(() => "")));
    setIsWinner(false);
    setCompletedHints({
      across: [],
      down: [],
    });
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

  useEffect(() => {
    if (isWinner) {
      const sound = new Audio("/sounds/game-win.wav"); // Specify your sound file path
      sound.play();
    }
  }, [isWinner]);

  return !gameStarted ? (
    <CrosswordInstructions onProceed={() => setGameStarted(true)} />
  ) : (
    <div className="min-h-screen bg-rose-100 p-10">
      <div className=" flex flex-col items-center bg-white rounded-xl p-10 w-max mx-auto">
        <h1 className="text-4xl font-bold text-rose-600 uppercase">
          Crossword Puzzle
        </h1>
        <div className="flex flex-col md:space-x-10 py-5">
          {/* Crossword Grid */}
          <div
            className={`flex flex-col h-max items-center border-rose-700 border-2 ${
              isWinner && "pointer-events-none"
            }`}
          >
            {grid.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center">
                {row.map((cell, colIndex) => {
                  const isCompletedAcross = hints.across.some(
                    (hint) =>
                      hint.row === rowIndex &&
                      colIndex >= hint.col &&
                      colIndex < hint.col + hint.word.length &&
                      completedHints.across.includes(hint.number)
                  );

                  const isCompletedDown = hints.down.some(
                    (hint) =>
                      hint.col === colIndex &&
                      rowIndex >= hint.row &&
                      rowIndex < hint.row + hint.word.length &&
                      completedHints.down.includes(hint.number)
                  );

                  // If either across or down word is completed, mark as green
                  const isCompleted = isCompletedAcross || isCompletedDown;

                  return (
                    <div
                      className={`relative p-2  border-rose-700 border-2 overflow-clip focus-within:border-rose-500 ${
                        isCompleted
                          ? "bg-emerald-100"
                          : "bg-rose-50 hover:bg-red-100"
                      }`}
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
                          className={`w-10 h-10 text-center text-2xl font-bold bg-transparent focus:outline-none focus:border-blue-500 ${
                            isCompleted ? "text-emerald-600" : "text-rose-950"
                          }`}
                          disabled={isCompleted}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          {/* Hints Section */}
          <div className="mb-5 md:mb-0 py-5">
            <div className="flex flex-wrap">
              <div>
                <h3 className="font-bold text-2xl text-rose-500">Across</h3>
                <ul className="ml-5 mb-3 text-xl list-outside">
                  {hints.across.map((hint) => (
                    <li
                      key={hint.number}
                      className={`list-item text-gray-800 ${
                        completedHints.across.includes(hint.number) &&
                        "opacity-70 line-through"
                      }`}
                    >
                      <span className="font-semibold text-right text-gray-600">
                        {hint.number}.
                      </span>{" "}
                      {hint.clue}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-rose-500">Down</h3>
                <ul className="ml-5 text-xl list-outside list">
                  {hints.down.map((hint) => (
                    <li
                      key={hint.number}
                      className={`list-item text-gray-800 ${
                        completedHints.down.includes(hint.number) &&
                        "opacity-70 line-through"
                      }`}
                    >
                      <span className="font-semibold text-right text-gray-600">
                        {hint.number}.
                      </span>{" "}
                      {hint.clue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {isWinner && (
          <div className="fixed inset-0 bg-zinc-900 bg-opacity-80 flex flex-col justify-center items-center">
            <div className="bg-white p-10 rounded-xl shadow-xl border-rose-200 border-4 flex flex-col justify-center items-center">
              <h5 className="text-green-600 font-bold text-2xl mb-5">
                🎉 Congratulations! You solved the crossword! 🎉
              </h5>
              <button
                onClick={resetGame}
                className="bg-rose-600 py-2 px-5 rounded-lg text-center font-extrabold text-white tracking-wide text-xl"
              >
                Restart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Crossword;
