import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import AboutMe from './AboutMePage/AboutMe';
import Navbar from './NavBar/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/projects" element={<ProjectsPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
