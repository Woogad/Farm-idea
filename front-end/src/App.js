import './App.css';
import IdeaInvestPage from './Page/IdeaInvestPage';
import HomePage from './Page/HomePage';
import { Routes, Route } from "react-router-dom";
import IdeaPostPage from './Page/IdeaPostPage';
import RegisterPage from './Page/RegisterPage';
import InterestPage from './Page/InterestPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/idea-inves' element={<IdeaInvestPage />} />
        <Route path='/idea-post' element={<IdeaPostPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/interest' element={<InterestPage />} />
      </Routes>
    </div>
  )
}
export default App;
