import "./HomePageBlock.css";
import { Link } from "react-router-dom";

function HomePageBlock({title, image, position, description, link}) {

	let page = link === 'bcr' ? '/bcr' : '/experience#' + link;

	return (
		<Link className="home-page-block" to={page}>
			<h3 className="block-position">{position}</h3>
			<div className="block-image-div"><img className="image" src={image} alt={title}/></div>
			<h2 className="block-title">{title}</h2>
			<p className="block-description">{description}</p>
		</Link>
	)
}

export default HomePageBlock;