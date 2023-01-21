import "./ExperiencePage.css"
import ProjectBlock from "./ProjectBlock";
import WorkExperience from "./WorkExperience";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ExperiencePage() {
	const location = useLocation();

	let openItem = null;
	if (location.state) {
		openItem = location.state.scrollTo || null;
	}

	useEffect(() => {
		if (openItem) {
			const element = document.getElementById(openItem);
			if (element) element.scrollIntoView({behavior: "smooth"});
		}
	}, [openItem]);

	return (
	  <div className="experience-page">
		<div className="content">
			<div className="work-experience">
				<h1>Work Experience</h1>
				<div className="experience-list">
					<WorkExperience
						companyTitle="Amazon"
						date="Summer 2023"
						position="Software Engineer Intern"
						details={[
							"I'm looking forward to starting in June 2023!",
						]}
						link="https://aws.amazon.com/"
					/>
					<div id="datto">
						<WorkExperience
							companyTitle="Datto"
							date="Summer 2022"
							position="Data Engineer Intern"
							programmingLanguages={["Python", "SQL", "Snowflake", "Airflow", "REST APIs", "Postman"]}
							details={[
								"Migrated a Revenue Recognition database schema containing 75+ tables, views, and stored procedures from MySQL to Snowflake, reducing monthly runtimes by 80%",
								"Wrote and shipped data pipelines to help Financial, Data Analytics, and Product teams access crucial data",
								"Created Airflow DAGs with data from the Stripe and Eventbrite APIs in preparation for analysis"
							]}
							link="https://www.datto.com/"
							startOpen={openItem === "datto"}
						/>
					</div>
					<WorkExperience
						companyTitle="Bowdoin CS"
						date="2021-Present"
						position="Learning Assistant and Grader"
						programmingLanguages={["Python", "C", "Algorithms", "Data Structures"]}
						details={[
							"Run weekly study groups, answering questions and helping students work through problems",
							"Grade assignments and quizzes and write solutions to in-class lab problems",
						]}
						link="https://www.bowdoin.edu/computer-science/"
					/>
					<WorkExperience
						companyTitle="Beamlab, Harvard"
						date="Summer 2021"
						position="Data Science and ML Intern"
						programmingLanguages={["Python", "Data Science", "Google Collab", "Neural Networks", "Random Forest", "Logistic Regression"]}
						details={[
							"Studied risk factors of Bronchopulmonary Dysplasia (a severe neonatal lung disease) by compiling and cleaning neonatal data from MIMIC-III database",
							"Created, trained, and tested three Machine learning models: Random Forest Classifier (AUC = 0.95), Logistic Regression (AUC = 0.93), and Neural Network (AUC = 0.90)",
						]}
						link="http://beamlab.org/"
					/>
					<WorkExperience
						companyTitle="Brain Power Co."
						date="Summer 2019"
						position="Software Engineer Intern"
						programmingLanguages={["Unity", "C#", "Google Glass", "Android Studio", "Java", "IOS", "Swift"]}
						details={[
							"Independently prepared the Empowered Brain mobile app for release on the IOS and Google App Stores",
							"Used Unity game development engine to add features, sound effects, and images to Google Glass app",
						]}
						link="https://brain-power.com/"
					/>
					<WorkExperience
						companyTitle="J.P. Morgan"
						date="April 2022"
						position="Data for Good Hackathon"
						programmingLanguages={["Python", "SQL", "Pandas", "Seaborn", "Scikit-learn"]}
						details={[
							"One of 130 participants selected from nearly 1000 applicants for a 24-hour hackathon",
							"Used data quantifying the environmental and social impacts of foreign investment",
							"Produced real-world solutions using the economic concepts of Marginal Social Benefit and Marginal Social Cost"
						]}
						link="https://careers.jpmorgan.com/in/en/students/programs/code-for-good?search=&tags=location__Americas__UnitedStatesofAmerica"
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
					<div id="GPS">
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
							link="https://github.com/zanebookbinder/Global-PassStore"
							startOpen={openItem === "GPS"}
						/>
					</div>
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
						link="https://tildesites.bowdoin.edu/~sbarker/teaching/courses/distributed/22spring/p1.php"
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
						link="https://tildesites.bowdoin.edu/~sbarker/teaching/courses/distributed/22spring/p2.php"
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
						link="https://tildesites.bowdoin.edu/~sbarker/teaching/courses/systems/22fall/lab5.php"
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