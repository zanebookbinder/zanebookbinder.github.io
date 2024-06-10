import "./WorkExperience.css";
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "../CustomAccordion";
import HighlightBlock from "../HighlightBlock";

function WorkExperience({ companyTitle, date, position, details, programmingLanguages, link, startOpen}) {
	let expandedStart = false;
	if (startOpen) {
		expandedStart = true;
	}

	const [expanded, setExpanded] = useState(expandedStart);

	return (
		<Accordion
			expanded={expanded} 
			onChange={() => setExpanded(!expanded)}
			className={expanded ? "experience-expanded" : ""}
		>
			<AccordionSummary>
				<div className="experience-title">
					<h3 className="position">{position}</h3>
					<div className="right-title">
						<a className="company-link" href={link} target="_blank" rel="noreferrer">
							<p className="company-title">{companyTitle}</p>
						</a>
						<p className="date">{date}</p>
					</div>
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<div className="experience-details">
					{programmingLanguages &&
						<div className="programming-languages">
							{programmingLanguages.map((detail, index) => {
								return <HighlightBlock key={index} text={detail}/>
							})}
						</div>
					}
					{details &&
						<div className="description">
							<ul>
								{details.map((detail, index) => {
									return <li className="detail" key={index}>{detail}</li>
								})}
							</ul>
						</div>
				}
				</div>
			</AccordionDetails>
		</Accordion>
	)
}

export default WorkExperience;
