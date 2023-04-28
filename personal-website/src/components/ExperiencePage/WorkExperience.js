import "./WorkExperience.css";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (<MuiAccordion disableGutters elevation={0} square {...props} />))(({ theme }) => ({
	backgroundColor: 'var(--background-color)',
	'&:not(:last-child)': {
	  borderBottom: 0,
	},
	'&:before': {
	  display: 'none',
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
	  expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
	  {...props}
	/>
  ))(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	fontSize: '20px',
	padding: '0px',
	height: 'fit-content',
	minHeight: '33.5px',
	marginBottom: '5px',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
	  transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
	  marginLeft: theme.spacing(1),
	  marginTop: '0px',
	  marginBottom: '0px',
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: "8px",
	paddingBottom: '0px',
	borderTop: '1px solid var(--primary-text)',
	'& .MuiCollapse-wrapperInner': {
		marginBottom: '0px',
	},
  }));

function WorkExperience({ companyTitle, date, position, details, programmingLanguages, link, startOpen, companyImage}) {
	let expandedStart = false;
	if (startOpen) {
		expandedStart = true;
	}

	const [expanded, setExpanded] = useState(expandedStart);

	return (
		<Accordion
			expanded={expanded} 
			onChange={() => setExpanded(!expanded)}
		>
			<AccordionSummary>
				<div className="experience-title">
					<div className="left-title">
						<h3 className="position">{position}</h3>
					</div>
					<div className="right-title">
						<div className="company-info" style={{display: "flex", alignItems: "center", gap: "3px"}}>
							<a className="company-link" href={link} target="_blank" rel="noreferrer">
								<p className="company-title">{companyTitle}</p>
							</a>
							<img className="company-logo" src={companyImage} alt="img not found" />
						</div>
						<p className="date">{date}</p>
					</div>
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<div className="experience-details">
					{programmingLanguages &&
						<p className="programming-languages"><span>Tools used:</span> {programmingLanguages.join(", ")}</p>
					}
					{details &&
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
				}
				</div>
			</AccordionDetails>
		</Accordion>
	)
}

export default WorkExperience;
