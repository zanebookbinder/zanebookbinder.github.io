import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage/HomePage.js';
import Navbar from './NavBar/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
