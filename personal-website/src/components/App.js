import './App.css';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ExperiencePage from './ExperiencePage/ExperiencePage';
import AboutMe from './AboutMePage/AboutMe';
import Navbar from './NavBar/NavBar';
import ResumePage from './ResumePage/ResumePage';
import PageNotFound from './PageNotFound';
import BCRPage from './BCRPage/BCRPage';

function App() {

  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/experience" element={<ExperiencePage/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/bcr" element={<BCRPage />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
