import { Navbar as NavBarElement } from 'react-bootstrap';
import './NavBar.css';

function Navbar() {
	return (
		<NavBarElement className="navbar" bg="dark" variant="dark">
      <NavBarElement.Brand className="nav" href="/">Zane Bookbinder</NavBarElement.Brand>
    </NavBarElement>
	)
}

export default Navbar;