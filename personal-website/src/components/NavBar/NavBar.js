import { Navbar as NavBarElement } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  const location = useLocation();

  console.log(location.pathname)

	return (
		<NavBarElement className="navbar" bg="dark" variant="dark">
      <NavBarElement.Brand className="name" href="/">Zane Bookbinder</NavBarElement.Brand>
      <div className="navbar-content">
        <Link className={"navbar-link " + (location.pathname === '/aboutme' ? "on-page" : "")} to="/aboutme">About Me</Link>
        <Link className={"navbar-link " + (location.pathname === '/projects' ? "on-page" : "")} to="/projects">Projects</Link>
        <Link className="navbar-link" to="/resume">Resume</Link>
        <div className="contactInfo">
            <p>zane.bookbinder@gmail.com</p>
            <p>(617) 862-7987</p>
            <p>LinkedIn</p> 
        </div>
      </div>
    </NavBarElement>
	)
}

export default Navbar;