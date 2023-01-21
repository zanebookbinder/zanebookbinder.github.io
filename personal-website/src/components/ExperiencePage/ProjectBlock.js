import { FaGithub } from "react-icons/fa";
import "./ProjectBlock.css";

function ProjectBlock({ title, date, programmingLanguages, details, link}) {
	return (
		<div className="project-block">
			<div className="project-title">
				<h3 className="project-name">{title}</h3>
				<p className="date">{date}</p>
				{link &&
					<a href={link} target="_blank" rel="noreferrer" className="project-link"><FaGithub/></a>
				}
			</div>
			<div className="project-details">
				<p className="programming-languages"><span>Tools used:</span> {programmingLanguages.join(", ")}</p>
				<div className="description">
					<div className="description-text">
						<span>Description:</span>
					</div>
					<ul>
						{details.map((detail, index) => {
							return <li className="detail" key={index}>{detail}</li>
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ProjectBlock;
