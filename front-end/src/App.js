import './App.css';
import IdeaInvestPage from './Page/IdeaInvestPage';
import HomePage from './Page/HomePage';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/idea-inves' element={<IdeaInvestPage />} />
      </Routes>
    </div>
  )

}

export default App;
