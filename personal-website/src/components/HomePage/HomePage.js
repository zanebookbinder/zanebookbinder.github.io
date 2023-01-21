import "./HomePage.css";
import ZaneImage from "../../images/Zane.jpg";

function HomePage() {
  return (
	<div className="homePage">
		<div className="left">
			<h1 className="title">Hi, I'm Zane!</h1>
			<p className="small-text homePageText">I'm a junior at Bowdoin College majoring in Computer Science and 
				minoring in Economics. I'm really passionate about software, 
				data, and AI. This summer, I'll be working as a Software Engineering 
				Intern for Amazon (if you're from Seattle, send me a message!). 
				Please check out my bio, projects, and resume. I would love to connect!
			</p>
		</div>
		<img className="zane-image" src={ZaneImage} alt="Zane" />
	</div>
  );
}

export default HomePage;