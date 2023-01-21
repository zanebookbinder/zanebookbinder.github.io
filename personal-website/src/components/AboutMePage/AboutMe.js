import ZaneImage from "../../images/Zane2.jpeg";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import "./AboutMe.css"

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
	padding: '0px',
	fontSize: '1.125rem',
	backgroundColor:
		'white',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
	  transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
	  marginLeft: theme.spacing(1),
	},
	'& .MuiAccordianSummary-root': {
		width: 'fit-content'
	}
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	paddingBottom: '5px',
	borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

function AboutMe() {
	const [expanded1, setExpanded1] = useState(false);
	const [expanded2, setExpanded2] = useState(false);
	const [expanded3, setExpanded3] = useState(false);
	const [expanded4, setExpanded4] = useState(false);

	return (
	  <div className="about-me">
		<div className="top-line">
			<h1 className="title">About Me</h1>
		</div>
		<div className="bio-and-image">
			<div className="bio">
				<p className="small-text about-me-text">
					Hi! I'm proud be to a JOB (Just Outside of Boston) from Newton, MA.
					I go to school at Bowdoin College in Maine, where I work as a Learning 
					Assistant and Grader for a few Computer Science classes and write sports 
					opinion articles for the Bowdoin Review.
				</p>
				<p className="small-text about-me-text">
					I was lucky to find my passion for coding in high school, when my Geometry 
					class spent a week writing Java code to draw a picture of a house. When my 
					teacher saw that my drawing had detailed trees, a car in the driveway, and 
					lots of other details, she suggested I take CS 101 the following year. I 
					haven't looked back since! I've completed:
				</p>
				<div className="accordions">
					<Accordion 
						disableGutters 
						elevation={0} 
						expanded={expanded1} 
						onChange={() => setExpanded1(!expanded1)}
					>
						<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
						3 internships (with a fourth upcoming this summer at Amazon!)
						</AccordionSummary>
						<AccordionDetails>
							<ul>
								<li>Software Engineer Intern at Amazon (Summer 2023)</li>
								<li>Data Engineer Intern at Datto (Summer 2022)</li>
								<li>Machine Learning and AI Intern at Beamlab (Summer 2021)</li>
								<li>Software Engineer Intern at Brainpower (Summer 2019) </li>
							</ul>
						</AccordionDetails>
					</Accordion>
					<Accordion 
						disableGutters 
						elevation={0} 
						expanded={expanded2} 
						onChange={() => setExpanded2(!expanded2)}
					>
						<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
							10 Computer Science classes
						</AccordionSummary>
						<AccordionDetails>
							<div className="multiple-lists">
								<div className="list-section">
									<p className="section-title">Bowdoin College (Brunswick, Maine)</p>
									<ul>
										<li>CSCI 2101: Data Structures (Java, 2020)</li>
										<li>CSCI 2200: Algorithms (2021)</li>
										<li>CSCI 2330: Foundations of Computer Systems (C, 2021)</li>
										<li>CSCI 3325: Distributed Systems (C/Java/Python, 2022)</li>
										<li>CSCI 2320: Principles of Programming Languages (Python, 2022)</li>
										<li>CSCI 2400: Artificial Intelligence (Python, 2022)</li>
										<li>CSCI 2210: Theory of Computation (2022)</li>
									</ul>
								</div>
								<div className="list-section">
									<p className="section-title">Milton Academy (Milton, MA)</p>
									<ul>
										<li>Computer Programming 1 (Java, 2017-2018)</li>
										<li>Computer Programming 2 (Java, 2018-2019)</li>
										<li>Advanced Computer Programming: Applied Math & AI (Python, 2019-2020)</li>
									</ul>
								</div>
								<div>
									<p className="section-title">Spring 2023:</p>
									<ul>
										<li>CSCI 18179: Software Development at University Carlos III (Madrid, Spain)</li>
									</ul>
								</div>
							</div>
							
						</AccordionDetails>
					</Accordion>
					<Accordion 
						disableGutters 
						elevation={0} 
						expanded={expanded3} 
						onChange={() => setExpanded3(!expanded3)}
					>
						<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
							30+ projects
						</AccordionSummary>
						<AccordionDetails>
							<p className="section-title">Here are some of my favorites:</p>
							<ul>
								<li>Bowdoin Course Reviews (React/Flask/MySQL, 2022-2023)</li>
								<li>Global PassStore (Python/Bash, 2022)</li>
								<li>BPD Models (Python/SQL, 2022)</li>
								<li>Online Bookstore - Nile (Java/Python, 2022)</li>
								<li>Web Server (C, 2021)</li>
								<li>Cache Simulator (C, 2021)</li>
								<li>Polar Bear Places (Ruby on Rails, 2022)</li>
								<li>Jeopardy Question Difficulties (Python, 2020)</li>
								<li>NBA Spread Model (Python, 2020)</li>
								<li>Homework Planner App (Swift, 2020)</li>
							</ul>
						</AccordionDetails>
					</Accordion>
					<Accordion 
						disableGutters 
						elevation={0} 
						expanded={expanded4} 
						onChange={() => setExpanded4(!expanded4)}
					>
						<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
							3 Semesters as Learning Assistant and Grader
						</AccordionSummary>
						<AccordionDetails>
							<ul>
								<li>Fall 2021: Algorithms Learning Assistant and Grader</li>
								<li>Spring 2022: Algorithms Learning Assistant and Grader</li>
								<li>Fall 2022: Foundations of Computer Systems Learning Assistant</li>
							</ul>
						</AccordionDetails>
					</Accordion>
				</div>
				<h1>What I'm working on now</h1>
				<p className="small-text more-text-paragraph">
					My current endeavor outside of school is creating a
					<span> course review website </span>
					for Bowdoin along with my girlfriend Olivia! 
					We always hear friends and classmates asking around about 
					certain professors and courses. So, we decided to give students 
					a way to shout out their favorite professors at Bowdoin or warn 
					others about tough courses they took. I had never tried my 
					hand at
					<span> web development </span>
					before November 2022, but by early 
					January 2023 we had a MySQL back-end hosted on AWS, a Flask API
					with 40 endpoints, and a beautiful and nearly-complete React 
					front-end. Now, we're making some final touches and working 
					with the Bowdoin IT Department and Student Government to get it online!
				</p>
			</div>
			<img className="zane-second-image" alt="Zane" src={ZaneImage} />
		</div>
		<div className="more-text">
			<p className="small-text">
				I'd love to connect if any of that caught your attention! Odds are, 
				if you email or text me I'll get back to you within a few hours. 
				Thanks for checking out my website!
			</p>
		</div>
		<div className="bottom-columns">
			<div className="column">
				<div className="section">
					<h1>Education</h1>
					<ul>
						<li><p className="bottom-text"><span>Bowdoin College: </span>Computer Science major, Economics minor (2020-2024)</p></li>
						<li><p className="bottom-text"><span>Milton Academy:</span> (2016-2020)</p></li>
					</ul>
				</div>
				<div className="section">
					<h1>Awards</h1>
					<ul>
						<li><p><span>Bowdoin Book Award for a 4.0 GPA</span> (2021-2022)</p></li>
						<li><p><span>Sarah and James Bowdoin Scholar — Dean's List</span> (2021-2022)</p></li>
						<li><p><span>Graduated Cum Laude</span> from Milton Academy (2020)</p></li>
					</ul>
				</div>
				<div className="section">
					<h1>Interests</h1>
					<ul>
						<li>
							<p>AI/ML, Professional sports (particularly Boston teams), Golf, Skiing</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="column">
				<div className="section">
					<h1>Technical Skills</h1>
					<ul>
						<li>
							<p className="technicalskill-line"><span>Programming Languages:</span> Python, Java, JavaScript, HTML/CSS, C, R, SQL</p>
						</li>
						<li>
							<p className="technicalskill-line"><span>Libraries and Tools:</span> React, Flask, MySQL, AWS RDS, Pandas, Hadoop, Git, Snowflake, Airflow, Postman</p>
						</li>
						<li>
							<p className="technicalskill-line"><span>Concepts:</span> OOP, Agile Development, REST APIs, Algorithms, Data Structures</p>
						</li>
					</ul>
				</div>
				<div className="section">
					<h1>Languages</h1>
					<ul>
						<li><span>Fluent English</span></li>
						<li><span>Conversational Spanish</span></li>
						<ul>
							<li>10 years of spanish classes</li>
							<li>Lived in Madrid with a Spanish family in June 2018</li>
							<li>Studying abroad in Madrid in Spring 2023</li>
						</ul>
					</ul>
				</div>
			</div>
			
		</div>
	  </div>
	);
  }
  
  export default AboutMe;