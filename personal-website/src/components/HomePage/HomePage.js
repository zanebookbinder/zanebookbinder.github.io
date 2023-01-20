import "./HomePage.css";

function HomePage() {
  return (
	<div className="homePage">
		<div className="left">
		<h1>Hi, I'm Zane!</h1>
		<p className="homePageText">I'm a junior at Bowdoin College majoring in Computer Science and 
			minoring in Economics. I'm really passionate about software, 
			data, and AI. This summer, I'll be working as a Software Engineering 
			Intern for Amazon (if you're from Seattle, send me a message!). If you're interested, 
			please check out my bio, projects, and resume. I would love to connect!
		</p>
		</div>
		<div className="right">
			<img src="../../images/Zane.jpg" alt="Zane" />
		</div>
	</div>
  );
}

export default HomePage;