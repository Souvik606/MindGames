import { Routes, Route, BrowserRouter} from "react-router-dom";
import PairGame from "./PairGame";
import Home from "./Home";
import SudokuGame from "./Sudoku";
import WordSearch from "./inframeWordSearch";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="pair-game" element={<PairGame/>}/>
      <Route path="sudoku-game" element={<SudokuGame/>}/>
      <Route path="word-search-game" element={<WordSearch/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
