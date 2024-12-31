import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative bg-gradient-to-br from-green-700 via-emerald-800 to-green-900 min-h-screen flex items-center justify-center">
      <div className="absolute lg:block hidden bg-green-500 rounded-full w-96 h-96 opacity-30 -top-10 -left-20"></div>
      <div className="absolute lg:block hidden bg-green-500 rounded-full w-80 h-80 opacity-20 bottom-10 right-10"></div>
      <div className="absolute lg:block hidden bg-green-500 rounded-full w-64 h-64 opacity-15 -top-36 left-[850px]"></div>

      <div className="relative bg-white rounded-3xl shadow-2xl mx-auto max-h-[90svh] max-w-6xl p-12 text-center overflow-x-hidden overflow-y-scroll">
        <div className="absolute bg-emerald-400 w-80 h-80 rounded-full blur-3xl opacity-30 -top-20 -left-20"></div>
        <div className="absolute bg-green-500 w-96 h-96 rounded-full blur-3xl opacity-20 bottom-0 -right-20"></div>

        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 drop-shadow-lg">
          Welcome to the Gaming Hub
        </h1>
        <p className="text-5xl font-bold text-emerald-700 mt-8">
          Engage yourself in funny games and <br /> melt away your anxiety.
        </p>
        <p className="text-3xl font-bold text-green-900 mt-6">
          Explore our mind games and dive into the fun!
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mt-12 place-items-center">
          {[
            {
              name: "Flip Fusion",
              img: "/images/fusion.webp",
              alt: "Flip Fusion",
              link: "/pair-game",
            },
            {
              name: "Sudoku Master",
              img: "/images/sudoku.jpg",
              alt: "Sudoku Master",
              link: "/sudoku-game",
            },
            {
              name: "Cross Word Victor",
              img: "/images/crossword-icon.jpg",
              alt: "Crossword Game",
              link: "/crossword-game",
            },

            {
              name: "Slide Puzz",
              img: "/images/SlidePuzzle.webp",
              alt: "Slide Puzz",
              link: "/sliding-puzzle",
            },

            {
              name: "Word Search",
              img: "/images/word-search.jpg",
              alt: "Word Search",
              link: "/word-search",
            },
          ].map((game, idx) => (
            <Link
              key={idx}
              to={game.link}
              className="group relative w-48 aspect-square rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 overflow-hidden flex items-center justify-center"
            >
              <img
                src={game.img}
                alt={game.alt}
                className="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p
                className="absolute bottom-0  flex justify-center text-2xl font-bold text-transparent
             group-hover:text-yellow-300 transition-colors mx-auto p-1"
              >
                {game.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
