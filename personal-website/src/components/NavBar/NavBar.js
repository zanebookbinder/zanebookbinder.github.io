import { Navbar as NavBarElement } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './NavBar.css';

function Navbar() {
  const location = useLocation();

	return (
    <div className="all">
      <div className='non-mobile'>
        <NavBarElement className="navbar" bg="dark" variant="dark">
              <NavBarElement.Brand className={"name " + (location.pathname === '/' ? "on-home-page" : "")} href="/">Zane Bookbinder</NavBarElement.Brand>
              <div className="navbar-content">
                <Link className={"navbar-link " + (location.pathname === '/experience' ? "on-page" : "")} to="/experience"><p className="link-text">Experience</p></Link>
                <Link className={"navbar-link " + (location.pathname === '/aboutme' ? "on-page" : "")} to="/aboutme"><p className='link-text'>About Me</p></Link>
                <Link className={"navbar-link " + (location.pathname === '/resume' ? "on-page" : "")} to="/resume"><p className='link-text'>Resume</p></Link>
                <div className="contactInfo">
                    <p>zane.bookbinder@gmail.com</p>
                    <p>(617) 862-7987</p>
                    <div className="icons">
                      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zane-bookbinder/">
                        <FaLinkedin className='navbar-logo linkedin'/>
                      </a>
                      <a target="_blank" rel="noreferrer" href="https://github.com/zanebookbinder">
                        <FaGithub className='navbar-logo github'/>
                      </a>
                    </div>
                </div>
              </div>
            </NavBarElement>
      </div>
      <div className='mobile'>
        <NavBarElement className="navbar" bg="dark" variant="dark">
              <div className='top'>
                <NavBarElement.Brand className="name" href="/">Zane Bookbinder</NavBarElement.Brand>
                <div className="contactInfo">
                      <p>zane.bookbinder@gmail.com</p>
                      <p>(617) 862-7987</p>
                      <div className="icons">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zane-bookbinder/">
                          <FaLinkedin className='navbar-logo linkedin'/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/zanebookbinder">
                          <FaGithub className='navbar-logo github'/>
                        </a>
                      </div>
                  </div>
              </div>
              <div className="navbar-content">
                <Link className={"navbar-link " + (location.pathname === '/experience' ? "on-page" : "")} to="/experience"><p className="link-text">Experience</p></Link>
                <Link className={"navbar-link " + (location.pathname === '/aboutme' ? "on-page" : "")} to="/aboutme"><p className='link-text'>About Me</p></Link>
                <Link className={"navbar-link " + (location.pathname === '/resume' ? "on-page" : "")} to="/resume"><p className='link-text'>Resume</p></Link>
              </div>
            </NavBarElement>
      </div>
    </div>
	)
}

export default Navbar;