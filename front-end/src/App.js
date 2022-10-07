import './App.css';
import PostIdeaInvestPage from './Page/PostIdeaInvestPage';
import HomePage from './Page/HomePage';
import { Routes, Route } from "react-router-dom";
import IdeaPostPage from './Page/IdeaPostPage';
import RegisterPage from './Page/RegisterPage';
import InterestPage from './Page/InterestPage';
import IdeaInvestPage from './Page/IdeaInvestPage';
import DetailinvesPage from './Page/DetailinvesPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/idea-post-inves' element={<PostIdeaInvestPage />} />
        <Route path='/idea-post' element={<IdeaPostPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/interest' element={<InterestPage />} />
        <Route path='/idea-inves' element={<IdeaInvestPage />} />
        <Route path='/detail-inves' element={<DetailinvesPage />} />

      </Routes>
    </div>
  )
}
export default App;
