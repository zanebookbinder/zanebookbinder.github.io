import { FaGithub } from "react-icons/fa";
import BowdoinLogo from "../../images/bowdoin-logo.png";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import "./ProjectBlock.css";

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
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
	// borderBottom: '1px solid black',
	padding: '0px',
	height: 'fit-content',
	backgroundColor:
		'white',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
	  transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
	  marginLeft: theme.spacing(1),
	  marginTop: '0px',
	  marginBottom: '0px',
	},
	'& .MuiAccordianSummary-root': {
		width: "100%",
		paddingLeft: "0px"
	}
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: "8px",
	paddingBottom: '0px',
	borderTop: '1px solid black',
	'& .MuiCollapse-wrapperInner': {
		marginBottom: '0px',
	},
  }));

function ProjectBlock({ title, date, programmingLanguages, details, link, startOpen}) {

	let expandedStart = false;
	if (startOpen) {
		expandedStart = true;
	}

	const [expanded, setExpanded] = useState(expandedStart);

	let linkImage = <FaGithub fontSize={32}/>;

	if (link && link.includes("sbarker")) {
		linkImage = <img src={BowdoinLogo} alt="Bowdoin Logo" className="bowdoin-logo" />;
	}
		

	return (
		<Accordion
			expanded={expanded} 
			onChange={() => setExpanded(!expanded)}
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
				</AccordionDetails>
		</Accordion>
	)
}

export default ProjectBlock;
