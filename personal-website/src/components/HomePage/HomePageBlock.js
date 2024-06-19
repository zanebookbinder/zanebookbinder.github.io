import "./HomePageBlock.css";
import { Link } from "react-router-dom";

function HomePageBlock({title, image, position, description, imageBorder, link}) {

	let imageClass = imageBorder ? "image image-border" : "image";

	let page = link === 'bcr' ? '/bcr' : '/experience';

	return (
		<Link className="home-page-block" to={page} state={{ scrollTo: link }}>
			<h3 className="block-title">{title}</h3>
			<div className="block-image-div"><img className={imageClass} src={image} alt={title}/></div>
			<h2 className="block-position">{position}</h2>
			<p className="block-description">{description}</p>
		</Link>
	)
}

export default HomePageBlock;