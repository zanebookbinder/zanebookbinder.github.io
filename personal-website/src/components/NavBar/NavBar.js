import { Navbar as NavBarElement } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './NavBar.css';

function Navbar() {
  const location = useLocation();

	return (
		<NavBarElement className="navbar" bg="dark" variant="dark">
      <NavBarElement.Brand className="name" href="/">Zane Bookbinder</NavBarElement.Brand>
      <div className="navbar-content">
        <Link className={"navbar-link " + (location.pathname === '/experience' ? "on-page" : "")} to="/experience">Experience</Link>
        <Link className={"navbar-link " + (location.pathname === '/aboutme' ? "on-page" : "")} to="/aboutme">About Me</Link>
        <Link className={"navbar-link " + (location.pathname === '/resume' ? "on-page" : "")} to="/resume">Resume</Link>
        <div className="contactInfo">
            <p>zane.bookbinder@gmail.com</p>
            <p>(617) 862-7987</p>
            <div className="icons">
              <a href="https://www.linkedin.com/in/zane-bookbinder/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/zanebookbinder">
                <FaGithub />
              </a>
            </div>
        </div>
      </div>
    </NavBarElement>
	)
}

export default Navbar;