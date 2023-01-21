import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import AboutMe from './AboutMePage/AboutMe';
import Navbar from './NavBar/NavBar';
import ResumePage from './ResumePage/ResumePage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
