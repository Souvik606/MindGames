import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-green-200 min-h-screen flex items-center justify-center relative">
            <div className="absolute lg:block hidden bg-green-400 rounded-full w-96 h-96 opacity-30 top-100 -left-20"></div>
            <div className="absolute lg:block hidden bg-green-500 rounded-full w-80 h-80 opacity-20 bottom-10 right-10"></div>
            <div className="absolute lg:block hidden bg-green-600 rounded-full w-64 h-64 opacity-15 -top-36 left-[1200px]"></div>

            <div className="bg-white rounded-3xl mx-auto max-w-6xl text-center p-16 relative z-10 overflow-hidden shadow-2xl">
                <div className="absolute bg-lime-500 rounded-full w-32 h-32 opacity-30 -top-10 -left-10"></div>
        <div className="absolute bg-lime-600 rounded-full w-40 h-40 opacity-20 -bottom-16 -right-10"></div>

                <p className="text-6xl text-lime-700 font-extrabold pt-4">Welcome to the Gaming Hub</p>
                <p className="text-5xl font-bold text-green-600 pt-12">Engage yourself in funny games and <br /> remove your anxiety</p>
                <p className="pt-12 text-4xl font-bold text-green-500">Here are some funny games for you!</p>
                <div className="grid grid-cols-2 gap-10 mt-10">
                    <div className="flex flex-col items-center">
                        <Link to="/pair-game" className="text-center">
                            <img className=" rounded-xl w-32" src="/images/fusion.webp" alt="Flip Fusion" />
                            <p className="text-2xl pt-4 font-extrabold text-green-800">Flip Fusion</p>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link to="/sudoku-game" className="text-center">
                            <img className="w-32" src="/images/sudoku.jpeg" alt="Sudoku Master" />
                            <p className="text-2xl pt-4 font-extrabold text-green-800">Sudoku Master</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;