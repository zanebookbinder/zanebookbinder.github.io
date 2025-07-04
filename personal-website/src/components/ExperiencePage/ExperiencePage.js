import "./ExperiencePage.css";
import ProjectBlock from "./ProjectBlock";
import WorkExperience from "./WorkExperience";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ExperiencePage() {
    const location = useLocation();

    let openItem = null;
    if (location.state) {
        openItem = location.state.scrollTo || null;
    } else if (location.hash) {
        openItem = location.hash.replace('#', '');
    }

    useEffect(() => {
        if (openItem) {
            const targetElement = document.getElementById(openItem);
            const offset = 80;
            const targetPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    }, [openItem]);

    useEffect(() => {
        document.title = "Experience | Zane Bookbinder";
    }, []);

    return (
        <div className="experience-page">
            <div className="work-experience">
                <h1 className="experience-column-header">Work Experience</h1>
                <div className="experience-list">
                    <div id="bridgewater">
                        <WorkExperience
                            companyTitle="Bridgewater Associates"
                            date="2024-Present"
                            position="Software Engineer"
                            programmingLanguages={[
                                "C#",
                                "Powershell",
                                "Azure Dev Ops",
                                "Git",
                                "Multiple LLM tools",
                                "NUnit",
                                "Agile Development",
                                "Infrastructure as Code",
                                "Distributed Systems",
                                "Message Brokers",
                                "System Design"
                            ]}
                            details={[
                                "Worked with business users to prioritize, build, and test" +
                                    " new features for a front-end app used by Traders (only developer on the project)",
                                "Helped migrate the Trading Tech stack to a new message broker system used by all components",
                                "Added functionality, implemented performance improvements, " +
                                    "and fixed critical bugs across Bridgewater’s systemized Trading ecosystem",
                            ]}
                            link="https://www.bridgewater.com/working-at-bridgewater/technology"
                            startOpen={
                                openItem === "bridgewater" || openItem === null
                            }
                        />
                    </div>
                    <div id="amazon">
                        <WorkExperience
                            companyTitle="Amazon"
                            date="Summer 2023"
                            position="Software Engineer Intern"
                            programmingLanguages={[
                                "TypeScript",
                                "Java",
                                "React",
                                "AWS CDK",
                                "AWS SDK",
                                "Lambda",
                                "S3",
                                "CloudFront",
                                "API Gateway",
                                "Cloud Formation",
                                "Route 53",
                                "IAM",
                                "SQS",
                                "System Design",
                                "Testing",
                                "Agile Development",
                                "Infrastructure as Code",
                            ]}
                            details={[
                                "Designed, developed, and tested a full-stack app that uses 10 " +
                                    "different AWS services to provide self-service onboarding for " +
                                    "an internal data management system",
                                "Created a React/Typescript website and multiple Lambdas, AWS " +
                                    "CDK stacks, and API Gateway endpoints",
                                "Decreased onboarding time from multiple developer days to ~5 " +
                                    "minutes for the 9 teams in the Compliance Tech organization",
                            ]}
                            link="https://aws.amazon.com/"
                            startOpen={openItem === "amazon"}
                        />
                    </div>
                    <div id="datto">
                        <WorkExperience
                            companyTitle="Datto"
                            date="Summer 2022"
                            position="Data Engineer Intern"
                            programmingLanguages={[
                                "Python",
                                "SQL",
                                "Snowflake",
                                "Airflow",
                                "REST APIs",
                                "Postman",
                            ]}
                            details={[
                                "Migrated a Revenue Recognition database schema containing 75+ tables, views, and stored procedures from MySQL to Snowflake, reducing monthly runtimes by 80%",
                                "Wrote and shipped data pipelines to help Financial, Data Analytics, and Product teams access crucial data",
                                "Created Airflow DAGs with data from the Stripe and Eventbrite APIs in preparation for analysis",
                            ]}
                            link="https://www.datto.com/"
                            startOpen={openItem === "datto"}
                        />
                    </div>
                    <div id="data-for-good">
                        <WorkExperience
                            companyTitle="J.P. Morgan"
                            date="April 2022"
                            position="Data for Good Hackathon"
                            programmingLanguages={[
                                "Python",
                                "SQL",
                                "Pandas",
                                "Seaborn",
                                "Scikit-learn",
                            ]}
                            details={[
                                "One of 130 participants selected from nearly 1000 applicants for a 24-hour hackathon",
                                "Used data quantifying the environmental and social impacts of foreign investment",
                                "Produced real-world solutions using the economic concepts of Marginal Social Benefit and Marginal Social Cost",
                            ]}
                            link="https://careers.jpmorgan.com/in/en/students/programs/code-for-good?search=&tags=location__Americas__UnitedStatesofAmerica"
                            startOpen={openItem === "data-for-good"}
                        />
                    </div>
                    <div id="ta-grader">
                        <WorkExperience
                            companyTitle="Bowdoin CS"
                            date="2021-2023"
                            position="Learning Assistant and Grader"
                            programmingLanguages={[
                                "Python",
                                "C",
                                "Algorithms",
                                "Data Structures",
                            ]}
                            details={[
                                "Two semesters as an Algorithms LA and grader",
                                "One semester as a Computer Systems LA",
                                "Run weekly study groups, answering questions and helping students work through problems",
                                "Grade assignments and quizzes and write solutions to in-class lab problems",
                            ]}
                            link="https://www.bowdoin.edu/computer-science/"
                            startOpen={openItem === "ta-grader"}
                        />
                    </div>
                    <div id="beamlab">
                        <WorkExperience
                            companyTitle="Beamlab"
                            date="Summer 2021"
                            position="Data Science and ML Intern"
                            programmingLanguages={[
                                "Python",
                                "Data Science",
                                "Google Collab",
                                "Neural Networks",
                                "Random Forest",
                                "Logistic Regression",
                            ]}
                            details={[
                                "Studied risk factors of Bronchopulmonary Dysplasia (a severe neonatal lung disease) by compiling and cleaning neonatal data from MIMIC-III database",
                                "Created, trained, and tested three Machine learning models: Random Forest Classifier (AUC = 0.95), Logistic Regression (AUC = 0.93), and Neural Network (AUC = 0.90)",
                            ]}
                            link="http://beamlab.org/"
                            startOpen={openItem === "beamlab"}
                        />
                    </div>
                    <div id="brain-power">
                        <WorkExperience
                            companyTitle="Brain Power Co."
                            date="Summer 2019"
                            position="Software Engineer Intern"
                            programmingLanguages={[
                                "Unity",
                                "C#",
                                "Google Glass",
                                "Android Studio",
                                "Java",
                                "IOS",
                                "Swift",
                            ]}
                            details={[
                                "Independently prepared the Empowered Brain mobile app for release on the IOS and Google App Stores",
                                "Used Unity game development engine to add features, sound effects, and images to Google Glass app",
                            ]}
                            link="https://brain-power.com/"
                            startOpen={openItem === "brain-power"}
                        />
                    </div>
                </div>
            </div>
            <div className="projects">
                <h1 className="experience-column-header">Projects</h1>
                <div className="projects-list">
                    <div id="bcr">
                        <ProjectBlock
                            title="Bowdoin Course Reviews"
                            date="2022-2023"
                            programmingLanguages={[
                                "Javascript",
                                "Python",
                                "CSS",
                                "React",
                                "Flask",
                                "MySQL",
                                "AWS RDS",
                                "AWS App Runner",
                                "AWS Secrets Manager",
                            ]}
                            details={[
                                "A platform for Bowdoin College students to review courses and professors",
                                "As of May 2025, has been used by 1,788 students who have added 1,733 reviews (Bowdoin has 1,850 students overall)",
                                "Uses a React frontend, a Python Flask API backend, and a MySQL database",
                                "Implements SSO with Okta, displays overall review statistics (leaderboard for top departments, professors, and courses), and allows users to star courses",
                                "Launched on November 6th, 2023 and received 500 unique visitors and nearly 400 reviews in the first 3 days",
                                "Passed control of the site to younger students for course/professor updates, maintenance, and continued development",
                                <p>
                                    Find more info
                                    <Link
                                        to="/bcr"
                                        style={{
                                            paddingLeft: "2px",
                                            marginLeft: "3px",
                                            textDecoration: "underline",
                                        }}
                                    >
                                        here
                                    </Link>
                                    !
                                </p>,
                            ]}
                            link="https://course-reviews.students.bowdoin.edu/"
                            startOpen={openItem === "bcr" || openItem === null}
                        />
                    </div>
                    <div id="ungated">
                        <ProjectBlock
                            title="Ungated Research"
                            date="Spring 2024"
                            programmingLanguages={[
                                "Python",
                                "JavaScript",
                                "SQL",
                                "Flask",
                                "React",
                                "S3",
                                "Google Gemini API",
                            ]}
                            details={[
                                "Worked with Prof. Martin Abel of Bowdoin College to address equity issues in Economic research by developing a website that provides AI-generated summaries and links to working papers for 2400+ published articles",
                                "Built a SQL database, a Flask API, and React frontend (hosted on AWS RDS and AWS AppRunner)",
                            ]}
                            link="https://ungatedresearch.org/"
                            startOpen={openItem === "ungated"}
                        />
                    </div>
                    <div id="linkedin-games-solver">
                        <ProjectBlock
                            title="Linkedin Games Solver"
                            date="Spring 2025"
                            programmingLanguages={[
                                "Python",
                                "Selenium",
                            ]}
                            details={[
                                "A Pip package that automatically solves the LinkedIn games Zip, Tango, and Queens",
                                "Efficient algorithms complete all games in under 1 second",
                                "Uses Selenium to navigate to game, scrape information from game board, and fill in solution",
                                "Includes a CLI interface with a navigatable list structure and repeatable solving"
                            ]}
                            link="https://github.com/zanebookbinder/LinkedIn-Games-Solver"
                            startOpen={openItem === "linkedin-games-solver"}
                        />
                    </div>
                    <div id="bethpage-black-bot">
                        <ProjectBlock
                            title="Bethpage Black Bot"
                            date="Spring 2025"
                            programmingLanguages={[
                                "Python",
                                "JavaScript",
                                "HTML/CSS",
                                "Shell",
                                "AWS (various services)"
                            ]}
                            details={[
                                "WORK IN PROGRESS",
                                "An application built on AWS that notifies registered users of open tee times at Bethpage Black golf course on Long Island",
                                "Allows users to configure notification requirements such as days of the week, times of day, and minimum number of players",
                                "Uses AWS Lambda, DynamoDB, Amplify, Cognito, EMS, and Secrets Manager",
                                "Was used to secure a 1:30pm tee time on a Saturday in June 2025 (nearly impossible to get even a weekday evening tee time normally, but especially with the Ryder Cup coming up!)"                                
                            ]}
                            link="https://github.com/zanebookbinder/Bethpage-Black-Bot"
                            startOpen={openItem === "bethpage-black-bot"}
                        />
                    </div>
                    <div id="fml-final-project">
                        <ProjectBlock
                            title="Beating the Bookies"
                            date="Spring 2024"
                            programmingLanguages={[
                                "Python",
                                "Pandas",
                                "Numpy",
                                "PyTorch",
                                "MatPlotLib",
                                "Web Scraping",
                            ]}
                            details={[
                                "A final project that aimed to combine historical NBA statistical data with sportsbook line/odd data in order to build a profitable betting strategy",
                                "Combined three datasets and added unique input features (such as travel distance)",
                                "Built 5 ML models: Linear Regressor (baseline), Neural Network, XGBoost Regressor, Bootstrapped PERT Decision Trees, and CART Decision Trees",
                                "Implemented multiple popular betting systems including Fade Favorites After Blowout and the Tunnel System",
                                "Performed profitability experiments by varying model type, odds type (best/worst/average across all sportsbooks), betting threshold (minimum difference between line and prediction to trigger a bet), and bet amounts (static vs. Kelly Criterion)",
                                "Found that in certain sets of games, even a linear regressor can be profitable if it has access to all sportsbook odds",
                                "See project poster in Github repository README for more details",
                            ]}
                            link="https://github.com/zanebookbinder/fml-nba-betting"
                            startOpen={openItem === "fml-final-project"}
                        />
                    </div>
                    <div id="poker-goat">
                        <ProjectBlock
                            title="Deep Q Learning for Texas Hold'em"
                            date="Fall 2023"
                            programmingLanguages={[
                                "Python",
                                "Keras",
                                "Tensorflow",
                                "Neural Networks",
                                "Deep Q Learning",
                                "Reinforcement Learning",
                            ]}
                            details={[
                                "An independent study in Artifical Intelligence with Professor David Byrd of Bowdoin College",
                                "Deep Q Learning model attempts to understand its cards, the game situation, etc. and then make an optimal decision about what action to take",
                                "Contains a full Texas Hold'em game which produces (s,a,s',r) experiences during game play",
                                "Model uses the Bellman equation to calculate loss in Q values, with rewards corresponding to chip win/loss amounts",
                            ]}
                            link="https://github.com/zanebookbinder/poker-goat"
                            startOpen={openItem === "poker-goat"}
                        />
                    </div>
                    <div id="starry-night">
                        <ProjectBlock
                            title="Starry Night Sky Creator"
                            date="2023"
                            programmingLanguages={[
                                "Javascript",
                                "HTML",
                                "CSS",
                                "Processing",
                            ]}
                            details={[
                                "A casual creator that allows users to create their own version of the sky in Van Gogh's painting 'The Starring Night'",
                                "Includes two modes to create swirls and stars, allowing for lots of variation in the artwork",
                                <a
                                    href={
                                        "https://openprocessing.org/sketch/2118181"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Try it for yourself!
                                </a>,
                            ]}
                            link="https://github.com/zanebookbinder/cc-m9-casual-creator"
                            startOpen={openItem === "starry-night"}
                        />
                    </div>
                    <div id="GPS">
                        <ProjectBlock
                            title="Global PassStore (GPS)"
                            date="2022"
                            programmingLanguages={["Python", "Bash"]}
                            details={[
                                "A Distributed System that stores passwords by breaking them into chunks and storing each chunk on a different machine",
                                "Employs functional homogeneity, threading, replication, location-based clustering, and smart clients",
                                "Runs on a 44-node network of AWS EC2 instances",
                                "Wrote a 13-page technical paper detailing the purpose, design, implementation, and testing of the system (see Github)",
                            ]}
                            link="https://github.com/zanebookbinder/Global-PassStore"
                            startOpen={openItem === "GPS"}
                        />
                    </div>
                    <div id="markov-golf-art">
                        <ProjectBlock
                            title="Markov Golf Art"
                            date="2023"
                            programmingLanguages={["Python", "Markov Chains"]}
                            details={[
                                "A program that uses Markov Chains to build unique and exciting golf holes and courses",
                                "Check out the example holes and courses in the Github repo linked above!",
                            ]}
                            link="https://github.com/zanebookbinder/cc-m3-markov-golf-art"
                            startOpen={openItem === "markov-golf-art"}
                        />
                    </div>
                    <div id="polar-bear-places">
                        <ProjectBlock
                            title="Polar Bear Places"
                            date="2022"
                            programmingLanguages={["Ruby on Rails", "CSS"]}
                            details={[
                                "A Ruby on Rails app that allows students to see who is living in their dorm the following year",
                                "Includes photos of dorms, saved profile pictures, multiple SQL tables, and CSS styling",
                            ]}
                            link="https://github.com/zanebookbinder/Polar-Bear-Places"
                            startOpen={openItem === "polar-bear-places"}
                        />
                    </div>
                    <div id="web-server">
                        <ProjectBlock
                            title="Web Server"
                            date="2021"
                            programmingLanguages={["C"]}
                            details={[
                                "A functional web server written in C using sockets and threading to handle concurrent requests",
                                "Hosts a website including multiple pages, links, and images",
                            ]}
                            link="https://tildesites.bowdoin.edu/~sbarker/teaching/courses/distributed/22spring/p1.php"
                            startOpen={openItem === "web-server"}
                        />
                    </div>
                    <div id="nile">
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
                            startOpen={openItem === "nile"}
                        />
                    </div>
                    <div id="cache-simulator">
                        <ProjectBlock
                            title="Cache Simulator"
                            date="2021"
                            programmingLanguages={["C"]}
                            details={[
                                "A cache simulator that takes in a trace file and outputs the cache hits and misses",
                                "Implemented using an LRU replacement policy",
                                "User can choose cache size, block size, and associativity",
                            ]}
                            link="https://tildesites.bowdoin.edu/~sbarker/teaching/courses/systems/22fall/lab5.php"
                            startOpen={openItem === "cache-simulator"}
                        />
                    </div>
                    <div id="nba-spread-model">
                        <ProjectBlock
                            title="NBA Spread Model"
                            date="2020"
                            programmingLanguages={[
                                "Python",
                                "Jupyter Notebook",
                            ]}
                            details={[
                                "Predicted NBA spread bets with an accuracy of 53% using a neural network and 20+ factors",
                            ]}
                            link="https://github.com/zanebookbinder/NBA-Predictions"
                            startOpen={openItem === "nba-spread-model"}
                        />
                    </div>
                    <div id="homework-planner-app">
                        <ProjectBlock
                            title="Homework Planner App"
                            date="2020"
                            programmingLanguages={["Swift", "XCode"]}
                            details={[
                                "An XCode planner app that keeps track of tasks for up to 10 classes and saves user data with CoreData",
                            ]}
                            link="https://github.com/zanebookbinder/Homework-Planner-App"
                            startOpen={openItem === "homework-planner-app"}
                        />
                    </div>
                    <div id="jeopardy">
                        <ProjectBlock
                            title="Jeopardy! Natural Language Processing"
                            date="2020"
                            programmingLanguages={[
                                "Python",
                                "Jupyter Notebook",
                            ]}
                            details={[
                                "Used natural language processing to determine whether more valuable Jeopardy! questions are actually harder than less valuable ones",
                                "Found that there is no correlation between question value and difficulty",
                            ]}
                            link="https://github.com/zanebookbinder/Jeopardy-Natural-Language-Processing"
                            startOpen={openItem === "jeopardy"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperiencePage;
