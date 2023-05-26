import "./HomePage.css";
import ZaneImage from "../../images/Zane-3.jpg";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import BcrScreenShot from "../../images/bcr-1.png";

function HomePage() {
  return (
	<div className="all-homepage">
		<div className="non-mobile">
			<div className="homePage">
				<div className="text-and-image">
					<img className="zane-image" src={ZaneImage} alt="Zane" />
					<div className="homepage-top">
						<Typed
							strings={["Hi, I'm Zane! ^1500 Nice to meet you!"]}
							element="h1"
							className="header typed-title"
							typeSpeed={80}
							onComplete={(instance) => {
								setTimeout(() => {
									instance.cursor.remove();
								}, 1000);
							}}
						/>
						<h1 className="header nontyped-title">Hi, I'm Zane!</h1>
						<p className="small-text homePageText">I'm a junior at Bowdoin College majoring in Computer Science and 
							minoring in Economics. I'm really passionate about software, 
							data, and AI. This summer, I'll be working as a Software Engineering 
							Intern at Amazon (if you're from Seattle, send me a message!). 
							Please check out my bio, projects, and resume. I would love to connect!
							Odds are, if you email or text me I'll get back to you within a few hours. 
							Thanks for checking out my website!
						</p>
						<p className="quicklink-title">Check out my:</p>
						<div className="quicklinks">
							<Link to="/experience" state={{scrollTo: "amazon"}} >
								Current internship
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
				<div className='bcr-homepage'>
					<div className='bcr-aboutme-text'>
						<h1 id="working-on-now" className="working-on-now-title">What I'm working on now</h1>
						<p className="small-text homePageText">
							My current endeavor outside of school is creating a
							<span> course review website </span>
							for Bowdoin along with my co-founder
							<a href="https://owirsching.github.io/" style={{padding: '5px', paddingInline: '3px', marginLeft: '3px'}} target="_blank" rel="noreferrer">Olivia</a>
							!
							We always hear friends and classmates asking about
							certain professors and courses. So, we decided to give students
							a way to shout out their favorite professors at Bowdoin or warn
							others about tough courses they took. I had never tried 
							<span> web development </span>
							before November 2022, but by early
							January 2023 we had a MySQL back-end hosted on AWS, a Flask API
							with 40 endpoints, and a beautiful and nearly-complete React
							front-end. Now, we're making some final touches and working
							with the Bowdoin IT Department and Student Government to get it online.
						</p>
					</div>
					<div className='bcr-screenshot-div'><img className="bcr-screenshot" alt="Bowdoin Course Reviews" src={BcrScreenShot} /></div>
				</div>
			</div>
		</div>
		<div className="mobile">
			<div className="mobile-top">
				<h1 className="title">Hi, I'm Zane!</h1>
				<img className="zane-image" src={ZaneImage} alt="Zane" />
			</div>
			<p className="small-text homePageText">
				I'm a junior at Bowdoin College majoring in Computer Science and 
				minoring in Economics. I'm really passionate about software, 
				data, and AI. This summer, I'll be working as a Software Engineering 
				Intern for Amazon (if you're from Seattle, send me a message!). 
				Please check out my bio, projects, and resume. I would love to connect!
			</p>
			<p className="quicklink-title">Check out my:</p>
			<div className="quicklinks">
				<Link to="/experience" state={{scrollTo: "amazon"}} >
					Current internship
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
			<div className='bcr-homepage'>
				<div className='bcr-aboutme-text'>
					<h1 id="working-on-now" className="working-on-now-title">What I'm working on now</h1>
					<p className="small-text homePageText">
						My current endeavor outside of school is creating a
						<span> course review website </span>
						for Bowdoin along with my co-founder
						<a href="https://owirsching.github.io/" style={{padding: '5px', paddingInline: '3px', marginLeft: '3px'}} target="_blank" rel="noreferrer">Olivia</a>
						!
						We always hear friends and classmates asking about
						certain professors and courses. So, we decided to give students
						a way to shout out their favorite professors at Bowdoin or warn
						others about tough courses they took. I had never tried 
						<span> web development </span>
						before November 2022, but by early
						January 2023 we had a MySQL back-end hosted on AWS, a Flask API
						with 40 endpoints, and a beautiful and nearly-complete React
						front-end. Now, we're making some final touches and working
						with the Bowdoin IT Department and Student Government to get it online.
					</p>
				</div>
				<div className='bcr-screenshot-div'><img className="bcr-screenshot" alt="Bowdoin Course Reviews" src={BcrScreenShot} /></div>
			</div>
		</div>
	</div>
  );
}

export default HomePage;