import { Link } from "react-router-dom";
import "./PageNotFound.css"

function PageNotFound() {
	return (
		<div className="page-not-found">
			<h1 className="page-not-found-title">Sorry, this page does not exist.</h1>
			<Link to="/" className="return-home-button">Return home</Link>
		</div>
	);
}

export default PageNotFound;