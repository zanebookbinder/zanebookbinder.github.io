import "./HomePage.css";
import ZaneImage from "../../images/Zane-3.jpg";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function HomePage({workingOnNow, technicalSkills, mostRecentInternship, favoriteProject}) {
  return (
	<div className="all-homepage">
		<div className="non-mobile">
			<div className="homePage">
				<div className="text-and-image">
					<div className="left">
						<Typed
							strings={["Hi, I'm Zane! ^1500 Nice to meet you!", "Hi, I'm Zane! ^500 I hope you enjoy my website!", "Hi, I'm Zane!"]}
							element="h1"
							className="title"
							typeSpeed={80}
							backSpeed={60}
							backDelay={2000}
							onComplete={(instance) => {
								setTimeout(() => {
									instance.cursor.remove();
								}, 1000);
							}}
						/>
						<p className="small-text homePageText">I'm a junior at Bowdoin College majoring in Computer Science and 
							minoring in Economics. I'm really passionate about software, 
							data, and AI. This summer, I'll be working as a Software Engineering 
							Intern for Amazon (if you're from Seattle, send me a message!). 
							Please check out my bio, projects, and resume. I would love to connect!
						</p>
						<p className="quicklink-title">Check out my:</p>
						<div className="quicklinks">
							<Link to="/aboutme" state={{scrollTo: "working-on-now"}} >
								Current project
							</Link>
							<Link to="/aboutme" state={{scrollTo: "skills"}} >
								Technical skills
							</Link>
							<Link to="/experience" state={{scrollTo: "datto"}} >
								Most recent internship
							</Link>
							<Link to="/experience" state={{scrollTo: "GPS"}} >
								Favorite past project
							</Link>
							
						</div>
					</div>
					<img className="zane-image" src={ZaneImage} alt="Zane" />
				</div>
			</div>
		</div>
		<div className="middle">
			<div className="top">
				<div className="top-left">
					<h1 className="title">Hi, I'm Zane!</h1>
					<img className="zane-image" src={ZaneImage} alt="Zane" />
					<p className="small-text homePageText">
						I'm a junior at Bowdoin College majoring in Computer Science and
						minoring in Economics. I'm really passionate about software,
						data, and AI. This summer, I'll be working as a Software Engineering
						Intern for Amazon (if you're from Seattle, send me a message!).
						Please check out my bio, projects, and resume. I would love to connect!
					</p>
				</div>
			</div>
			<p className="quicklink-title">Check out my:</p>
			<div className="quicklinks">
				<Link to="/aboutme" state={{scrollTo: "working-on-now"}} >
					Current project
				</Link>
				<Link to="/aboutme" state={{scrollTo: "skills"}} >
					Technical skills
				</Link>
				<Link to="/experience" state={{scrollTo: "datto"}} >
					Most recent internship
				</Link>
				<Link to="/experience" state={{scrollTo: "GPS"}} >
					Favorite past project
				</Link>
			</div>
		</div>
		<div className="mobile">
			<h1 className="title">Hi, I'm Zane!</h1>
			<img className="zane-image" src={ZaneImage} alt="Zane" />
			<p className="small-text homePageText">
				I'm a junior at Bowdoin College majoring in Computer Science and 
				minoring in Economics. I'm really passionate about software, 
				data, and AI. This summer, I'll be working as a Software Engineering 
				Intern for Amazon (if you're from Seattle, send me a message!). 
				Please check out my bio, projects, and resume. I would love to connect!
			</p>
			<p className="quicklink-title">Check out my:</p>
			<div className="quicklinks">
				<Link to="/aboutme" state={{scrollTo: "working-on-now"}} >
					Current project
				</Link>
				<Link to="/aboutme" state={{scrollTo: "skills"}} >
					Technical skills
				</Link>
				<Link to="/experience" state={{scrollTo: "datto"}} >
					Most recent internship
				</Link>
				<Link to="/experience" state={{scrollTo: "GPS"}} >
					Favorite past project
				</Link>
				
			</div>
		</div>
	</div>
  );
}

export default HomePage;