import "./AboutMe.css"
import ZaneImage from "../../images/Zane2.jpeg";
import ZaneCroppedImage from "../../images/Zane-cropped.jpeg";
import { useEffect, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from '../CustomAccordion.js';
import { useLocation, Link } from "react-router-dom";
import HighlightBlock from "../HighlightBlock.js";

function AboutMe() {
	const programmingLanauges = ["Python", "Javascript/TypeScript", "Java", 
		"C", "SQL", "HTML", "CSS"];
	const libraries = ["Git", "React", "Flask", "Pandas", "Material UI", 
		"MySQL", "Postman", "AWS CDK", "AWS SDK"];
	const aws = ["Lambda", "S3", "API Gateway", "CloudFront", "CloudFormation",
		"Route 53", "SNS", "IAM", "ACM", "RDS", "App Runner"];
	const concepts = ["Algorithms", "Data Structures", "Full-Stack Development",
	 	"Agile Development / Scrum", "REST APIs", "Object-Oriented Programming",
	  	"Relational Databases", "Distributed Systems", "Cloud Development",
	   	"Infrastructure as Code"];
	
	const [expanded1, setExpanded1] = useState(false);
	const [expanded2, setExpanded2] = useState(false);
	const [expanded3, setExpanded3] = useState(false);
	const [expanded4, setExpanded4] = useState(false);

	const location = useLocation();
	let scrollTo = null;

	if (location.state) {
		scrollTo = location.state.scrollTo || null;
	}

	let image = ZaneImage;
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		document.title = "About Me | Zane Bookbinder";

		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
	
		window.onresize = handleResize;
	
		return () => {
			window.onresize = null;
		};
	}, []);
  

	if (windowWidth < 800) {
		image = ZaneCroppedImage;
	}

	useEffect(() => {
		if (scrollTo) {
			const targetElement = document.getElementById(scrollTo);
			const offset = 80;
			const targetPosition = targetElement.offsetTop - offset;

			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth',
			});
		}
	}, [scrollTo]);

	return (
	  <div className="about-me">
		<h1 className="title desktop-title">About Me</h1>
		<div className="bio-and-image">
			<div className="bio">
				<h1 className="title mobile-title">About Me</h1>
				<p className="small-text about-me-text">
					Hi! I'm proud to be a JOB (Just Outside of Boston) from Newton, MA.
					I go to school at Bowdoin College in Maine, where I've worked as a Learning 
					Assistant and Grader for two CS classes and as a Senior Interviewer 
					for the Bowdoin Admissions team.
				</p>
				<p className="small-text about-me-text">
					I'm super passionate about software! In the 7 years 
					since I took my first Computer Science class, I've completed:
				</p>
				<div className="accordions">
					<Accordion 
						disableGutters 
						elevation={0} 
						expanded={expanded1} 
						onChange={() => setExpanded1(!expanded1)}
						className={expanded1 ? "accordion-expanded" : ""}
					>
						<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
						4 internships
						</AccordionSummary>
						<AccordionDetails>
							<ul className="list-with-background">
								<li><Link to='/experience' state={{scrollTo: 'amazon'}}>Software Engineer Intern at Amazon (Summer 2023)</Link></li>
								<li><Link to='/experience' state={{scrollTo: 'datto'}}>Data Engineer Intern at Datto (Summer 2022)</Link></li>
								<li><Link to='/experience' state={{scrollTo: 'beamlab'}}>Machine Learning and AI Intern at Beamlab (Summer 2021)</Link></li>
								<li><Link to='/experience' state={{scrollTo: 'brain-power'}}>Software Engineer Intern at Brainpower (Summer 2019)</Link> </li>
							</ul>
						</AccordionDetails>
					</Accordion>
					<Accordion 
						disableGutters 
						elevation={0} 
						expanded={expanded2} 
						onChange={() => setExpanded2(!expanded2)}
						className={expanded2 ? "accordion-expanded" : ""}
					>
						<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
							10 Computer Science classes
						</AccordionSummary>
						<AccordionDetails>
							<div className="multiple-lists">
								<div className="list-section">
									<p className="section-title">Bowdoin College (Brunswick, Maine)</p>
									<ul className="list-with-background">
										<li><a target="_blank" rel="noreferrer" href="https://tildesites.bowdoin.edu/~sbarker/teaching/courses/ds/21fall/">CSCI 2101: Data Structures (Java, 2020)</a></li>
										<li><a target="_blank" rel="noreferrer" href="https://tildesites.bowdoin.edu/~ltoma/teaching/cs231/fall13/">CSCI 2200: Algorithms (Python, 2021)</a></li>
										<li><a target="_blank" rel="noreferrer" href="https://tildesites.bowdoin.edu/~smajerci/teaching/cs2210/2019spring/index.html">CSCI 2210: Theory of Computation (2022)</a></li>
										<li><a target="_blank" rel="noreferrer" href="https://tildesites.bowdoin.edu/~mirfan/CSCI-2320.html">CSCI 2320: Principles of Programming Languages (Python, 2022)</a></li>
										<li><a target="_blank" rel="noreferrer" href="https://tildesites.bowdoin.edu/~sbarker/teaching/courses/systems/22fall/">CSCI 2330: Foundations of Computer Systems (C, 2021)</a></li>
										<li className="no-link">CSCI 2400: Artificial Intelligence (Python, 2022)</li>
										<li><a target="_blank" rel="noreferrer" href="https://tildesites.bowdoin.edu/~sbarker/teaching/courses/distributed/22spring/">CSCI 3325: Distributed Systems (C/Java/Python, 2022)</a></li>
										<li className="no-link">CSCI 3725: Computational Creativity (Python/Ruby/JS/Processing, 2023)</li>
									</ul>
								</div>
								<div className="list-section">
									<p className="section-title">Milton Academy (Milton, MA)</p>
									<ul className="list-with-background">
										<li><a target="_blank" rel="noreferrer" href="https://www.milton.edu/academics/academic-departments/computer-science-courses/">Computer Programming 1 (Java, 2017-2018)</a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.milton.edu/academics/academic-departments/computer-science-courses/">Computer Programming 2 (Java, 2018-2019)</a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.milton.edu/academics/academic-departments/computer-science-courses/">Advanced Computer Programming: Applied Math & AI (Python, 2019-2020)</a></li>
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
						className={expanded3 ? "accordion-expanded" : ""}
					>
						<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
							30+ projects
						</AccordionSummary>
						<AccordionDetails>
							<p className="section-title">Here are some of my favorites:</p>
							<ul className="list-with-background">
								<li><Link to="/experience" state={{scrollTo: "bcr"}}>Bowdoin Course Reviews (React/Flask/MySQL, 2022-2023)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "poker-goat"}}>Deep Reinforcement Learning for Texas Hold'em (Python/Keras, 2023)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "starry-night"}}>Starry Night Sky Creator (Processing, 2023)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "markov-golf-art"}}>Markov Golf Art (Python, 2023)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "GPS"}}>Global PassStore (Python/Bash, 2022)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "beamlab"}}>BPD Models (Python/SQL, 2022)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "nile"}}>Online Bookstore - Nile (Java/Python, 2022)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "web-server"}}>Web Server (C, 2021)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "cache-simulator"}}>Cache Simulator (C, 2021)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "polar-bear-places"}}>Polar Bear Places (Ruby on Rails, 2022)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "jeopardy"}}>Jeopardy Natural Language Processing (Python, 2020)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "nba-spread-model"}}>NBA Spread Model (Python, 2020)</Link></li>
								<li><Link to="/experience" state={{scrollTo: "homework-planner-app"}}>Homework Planner App (Swift, 2020)</Link></li>
							</ul>
						</AccordionDetails>
					</Accordion>
					<Accordion 
						disableGutters 
						elevation={0} 
						expanded={expanded4} 
						onChange={() => setExpanded4(!expanded4)}
						className={expanded4 ? "accordion-expanded" : ""}
					>
						<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
							3 Semesters as Learning Assistant and Grader
						</AccordionSummary>
						<AccordionDetails>
							<ul className="list-with-background">
								<li>Fall 2021: Algorithms Learning Assistant and Grader</li>
								<li>Spring 2022: Algorithms Learning Assistant and Grader</li>
								<li>Fall 2022: Foundations of Computer Systems Learning Assistant</li>
							</ul>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
			<img className="zane-second-image" alt="Zane" src={image} />
		</div>
		<div className="bottom-columns">
			<div className="column">
				<div className="section">
					<h1>Education</h1>
					<ul>
						<li><p className="bottom-text"><span><a href="https://www.bowdoin.edu/" target="_blank" rel="noreferrer">Bowdoin College:</a></span>Computer Science major, Economics minor (2020-2024)</p></li>
						<li><p className="bottom-text"><span><a href="https://www.milton.edu/" target="_blank" rel="noreferrer">Milton Academy:</a></span>(2016-2020)</p></li>
					</ul>
				</div>
				<div className="section">
					<h1>Awards</h1>
					<ul>
						<li><p><span><a href="https://www.bowdoin.edu/about/prizes/general-scholarship.html" target="_blank" rel="noreferrer">Dorothy Haythorn Collins Award</a></span>for academic and general excellence in Computer Science (2022-2023)</p></li>
						<li><p><span><a href="https://www.bowdoin.edu/admissions/book-award/" target="_blank" rel="noreferrer">Bowdoin Book Award</a></span>for a 4.0 GPA (2021-2022)</p></li>
						<li><p><span><a href="https://www.bowdoin.edu/events/family-weekend/sarah-and-james-bowdoin-day.html" target="_blank" rel="noreferrer">Sarah and James Bowdoin Scholar</a></span>— Dean's List (2021-2022)</p></li>
						<li><p><span><a href="https://www.milton.edu/news/graduation-2020/" target="_blank" rel="noreferrer">Graduated Cum Laude</a></span>from Milton Academy (2020)</p></li>
					</ul>
				</div>
				<div className="section">
					<h1>Languages</h1>
					<ul>
						<li><span>Proficient Spanish</span></li>
						<ul>
							<li>11 years of Spanish classes</li>
							<li>Lived in Madrid with a Spanish family (June 2018)</li>
							<li>Studied abroad in Madrid (Spring 2023)</li>
						</ul>
					</ul>
				</div>
			</div>
			<div className="column">
				<div className="section">
					<h1 id="skills">Technical Skills</h1>
					<ul>
						<li>
							<span>Programming Languages</span>
							<div className='skill-list'>
								{programmingLanauges.map((language, index) => {
									return <HighlightBlock key={index} text={language} />
								})}
							</div>
						</li>
						<li>
							<span>Libraries and Frameworks</span>
							<div className='skill-list'>
								{libraries.map((library, index) => {
									return <HighlightBlock key={index} text={library} />
								})}
							</div>
						</li>
						<li>
							<span>AWS Services</span>
							<div className='skill-list'>
								{aws.map((service, index) => {
									return <HighlightBlock key={index} text={service} />
								})}
							</div>
						</li>
						<li>
							<span>Concepts</span>
							<div className='skill-list'>
								{concepts.map((concept, index) => {
									return <HighlightBlock key={index} text={concept} />
								})}
							</div>
						</li>
					</ul>
				</div>
				<div className="section">
					<h1 id="interests">Interests</h1>
					<ul>
						<li>
							<p>AI/ML, Professional sports (particularly Boston teams), Golf, Skiing</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	  </div>
	);
  }
  
  export default AboutMe;