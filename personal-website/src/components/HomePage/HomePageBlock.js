import "./HomePageBlock.css";
import { Link } from "react-router-dom";

function HomePageBlock({title, image, images, position, description, link}) {

	let page = link === 'bcr' ? '/bcr' : '/experience#' + link;

	return (
		<Link className="home-page-block" to={page}>
			<h3 className="block-position">{position}</h3>
			<div className="block-image-div">
				{images ? (
					<div className="block-images-row">
						{images.map((src, i) => (
							<img
								key={i}
								className="image vertical-screenshot"
								src={src}
								alt={`${title} screenshot ${i + 1}`}
							/>
						))}
					</div>
				) : (
					<img className="image" src={image} alt={title} />
				)}
			</div>
			<h2 className="block-title">{title}</h2>
			<p className="block-description">{description}</p>
		</Link>
	)
}

export default HomePageBlock;