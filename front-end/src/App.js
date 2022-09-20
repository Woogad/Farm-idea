import './App.css';
import IdeaInvestPage from './Page/IdeaInvestPage';
import HomePage from './Page/HomePage';
import { Routes, Route} from "react-router-dom";
import IdeaPostPage from './Page/IdeaPostPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/idea-inves' element={<IdeaInvestPage />} />
        <Route path='/idea-post' element={<IdeaPostPage />} />
      </Routes>
    </div>
  )
}
export default App;
