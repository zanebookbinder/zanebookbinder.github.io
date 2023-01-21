import "./WorkExperience.css";

function WorkExperience({ companyTitle, location, date, position, details, programmingLanguages, link}) {
	return (
		<div className="experience-block">
			<div className="experience-title">
				<div className="left-title">
					<h3 className="position">{position}</h3>
					<h3 className="company-title">{companyTitle}</h3>	
				</div>
				<div className="right-title">
					<p className="date">{location}</p>
					<p className="date">{date}</p>
				</div>
				{/* {link &&
					<a href={link} target="_blank" rel="noreferrer" className="experience-link"></a>
				} */}
			</div>
			<div className="experience-details">
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

export default WorkExperience;
