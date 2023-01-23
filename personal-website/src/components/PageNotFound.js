import { Link } from "react-router-dom";

function PageNotFound() {
	return (
		<div style={{marginLeft: "5rem", marginTop: "1rem"}}>
			<h1 style={{marginBottom: "30px", fontSize: "28px"}}>Sorry, this page does not exist.</h1>
			<Link to="/" style={{borderRadius: "30px", marginTop: "40px", border: "1px solid var(--primary-text)", padding: "10px 15px", fontSize: "20px"}}>Return home</Link>
		</div>
	);
}

export default PageNotFound;