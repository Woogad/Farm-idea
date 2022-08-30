import './App.css';
import Home from './Home';
import Recom from './Recom';
import Slider from './Slider';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Home />
      <Slider />
      <Recom />
    </>
  );
}

export default App;
