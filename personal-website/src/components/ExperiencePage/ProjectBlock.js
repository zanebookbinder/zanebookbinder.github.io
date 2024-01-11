import { FaGithub } from "react-icons/fa";
import BowdoinLogo from "../../images/bowdoin-logo.png";
import BCRLogo from "../../images/logo192.png"
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "../CustomAccordion";
import HighlightBlock from "../HighlightBlock";
import "./ProjectBlock.css";

function ProjectBlock({ title, date, programmingLanguages, details, link, startOpen}) {

	let expandedStart = false;
	if (startOpen) {
		expandedStart = true;
	}

	const [expanded, setExpanded] = useState(expandedStart);

	let linkImage = <FaGithub className="logo" fontSize={29}/>;

	if (link && link.includes("sbarker")) {
		linkImage = <img src={BowdoinLogo} alt="Bowdoin Logo" className="logo" />;
	} else if (link && link.includes('course-reviews')) {
		linkImage = <img src={BCRLogo} alt="Bowdoin Course Reviews Logo" className="logo bcr-logo" />;
	}

	return (
		<Accordion
			expanded={expanded} 
			onChange={() => setExpanded(!expanded)}
			className={expanded ? "project-expanded" : ""}
			style={{minHeight: "45px"}}
		>
				<AccordionSummary>
					<div className="project-title">
						<h3 className="project-name">{title}</h3>
						<div className="project-title-right">
							{link &&
								<a href={link} target="_blank" rel="noreferrer" className="project-link">{linkImage}</a>
							}
							<p className="date">{date}</p>
						</div>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<div className="project-details">
						<p className="programming-languages">
							{programmingLanguages.map((detail) => {
								return <HighlightBlock text={detail}/>
							})}
													</p>
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
				</AccordionDetails>
		</Accordion>
	)
}

export default ProjectBlock;
