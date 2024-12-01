import { Routes, Route, BrowserRouter} from "react-router-dom";
import PairGame from "./PairGame";
import Home from "./Home";
import SudokuGame from "./Sudoku";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="pair-game" element={<PairGame/>}/>
      <Route path="sudoku-game" element={<SudokuGame/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
