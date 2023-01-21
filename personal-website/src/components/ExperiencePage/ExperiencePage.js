import "./ExperiencePage.css"
import ProjectBlock from "./ProjectBlock";
import WorkExperience from "./WorkExperience";

function ExperiencePage() {
	return (
	  <div className="experience-page">
		<div className="content">
			<div className="work-experience">
				<h1>Work Experience</h1>
				<div className="experience-list">
					<WorkExperience
						companyTitle="Bowdoin College"
						location="Brunswick, ME"
						date="2021-2022"
						position="Software Engineering Intern"
						programmingLanguages={["Python", "Javascript", "CSS", "React", "Flask", "MySQL", "AWS RDS"]}
						details={[
							"Developed a website that allows students to review courses at Bowdoin College",
							"Used React for the frontend, a Flask API for the backend, and MySQL for the database",
						]}
					/>
				</div>
			</div>
			<div className="projects">
				<h1>Projects</h1>
				<div className="projects-list">
					<ProjectBlock
						title="Bowdoin Course Reviews (Coming soon!)"
						date="2022-2023"
						programmingLanguages={["Javascript", "Python", "CSS", "React", "Flask", "MySQL", "AWS RDS"]}
						details={[
							"A website that allows students to review courses at Bowdoin College",
							"Uses React for the frontend, a Flask API for the backend, and MySQL for the database",
						]}
					/>
					<ProjectBlock
						title="Global PassStore (GPS)"
						date="2022"
						programmingLanguages={["Python", "Bash"]}
						details={[
							"A Distributed System that stores passwords by breaking them into chunks and storing each chunk on a different machine",
							"Employs functional homogeneity, threading, replication, location-based clustering, and smart clients",
							"Runs on a 44-node network of AWS EC2 instances",
							"Wrote a 13-page technical paper detailing the purpose, design, implementation, and testing of the system (see Github)"
						]}
						link="https://github.com/zanebookbinder/Global-PassStore" />
					<ProjectBlock
						title="Polar Bear Places"
						date="2022"
						programmingLanguages={["Ruby on Rails", "CSS"]}
						details={[
							"A Ruby on Rails app that allows students to see who is living in their dorm the following year",
							"Includes photos of dorms, saved profile pictures, multiple SQL tables, and CSS styling"
						]}
						link="https://github.com/zanebookbinder/Polar-Bear-Places"
					/>
					<ProjectBlock
						title="NBA Spread Model"
						date="2020"
						programmingLanguages={["Python", "Jupyter Notebook"]}
						details={[
							"Predicted NBA spread bets with an accuracy of 53% using a neural network and 20+ factors"
						]}
						link="https://github.com/zanebookbinder/NBA-Predictions"
					/>
					<ProjectBlock
						title="Web Server"
						date="2021"
						programmingLanguages={["C"]}
						details={[
							"A functional web server written in C using sockets and threading to handle concurrent requests",
							"Hosts a website including multiple pages, links, and images"
						]}
					/>
					<ProjectBlock
						title="Homework Planner App"
						date="2020"
						programmingLanguages={["Swift", "XCode"]}
						details={[
							"An XCode planner app that keeps track of tasks for up to 10 classes and saves user data with CoreData"
						]}
						link="https://github.com/zanebookbinder/Homework-Planner-App"
					/>
					<ProjectBlock
						title="Online Bookstore (Nile)"
						date="2021"
						programmingLanguages={["Python", "Java", "RPCs"]}
						details={[
							"A distributed system containing three servers: inventory, order, and customer",
							"Implemented using RPCs and a client-server architecture",
							"Includes user-friendly client programs written in both Java and Python",
						]}
					/>
					<ProjectBlock
						title="Cache Simulator"
						date="2021"
						programmingLanguages={["C"]}
						details={[
							"A cache simulator that takes in a trace file and outputs the cache hits and misses",
							"Implemented using an LRU replacement policy",
							"User can choose cache size, block size, and associativity"
						]}
					/>
					<ProjectBlock
						title="Jeopardy! Natural Language Processing"
						date="2020"
						programmingLanguages={["Python", "Jupyter Notebook"]}
						details={[
							"Used natural language processing to determine whether more valuable Jeopardy! questions are actually harder than less valuable ones",
							"Found that there is no correlation between question value and difficulty",
						]}
						link="https://github.com/zanebookbinder/Jeopardy-Natural-Language-Processing"
					/>
				</div>
			</div>
		</div>
	  </div>
	);
  }
  
  export default ExperiencePage;