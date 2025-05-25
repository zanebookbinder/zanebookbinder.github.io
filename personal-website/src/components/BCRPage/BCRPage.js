import BCRImage from "../../images/BCR.png";
import BcrDepartmentPage from "../../images/bcr-department-page.png";
import BcrMobileHomePage from "../../images/bcr-mobile-homepage.png";
import BcrCreateReviewPage from "../../images/bcr-createreview.png";
import BcrMobileStatsPage from "../../images/bcr-mobile-statspage.png";
import BcrMobileProfilePage from "../../images/bcr-mobile-profilepage.png";
import BcrLoginPage from "../../images/bcr-login.png";
import "./BCRPage.css";
import "../HomePage/HomePageMobile.css";
import { useLayoutEffect } from "react";

function BCRPage() {

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	});

	const bcrReviews = [
		"It looks like a spaceship!",
		"People were talking about how much they liked the site in one of my classes and recommended it to everyone, totally organically!",
		"It’s hella nice… that site is a blessing",
		"A very smooth software experience",
		"I don't have the skills to build something like that. I'm glad you did!"
	];

	return (
		<div className="all-bcr-page">
			<div className="bcr-homepage">
				<div className="bcr-aboutme-text">
					<div className="tag quicklink-title">RECENT PROJECT</div>
					<h1
						id="working-on-now"
						className="working-on-now-title homepage-title"
					>
						Bowdoin Course Reviews
					</h1>
					<p className="small-text homePageText no-margin-bottom-text">
						Bowdoin Course Reviews is a website that I created
						and rolled out with my classmate
						<a
							href="https://www.oliviawirsching.com/"
							style={{ paddingLeft: "2px", marginLeft: "3px" }}
							target="_blank"
							rel="noreferrer"
						>
							Olivia
						</a>
						{' '} during our third and fourth years of college! Every registration period, we heard friends and
						classmates asking
						<span style={{fontStyle: "italic", fontWeight: 400}}> “Have you taken this class? How was  it?” </span>
						We wanted to give
						students a centralized and reliable place to shout out
						their favorite professors or warn others about tough
						courses they took. <br/> <br/> We launched the site in November 2023,
						and dozens of students told us that it helped them
						make more well-informed decisions about course registration (in addition to being a lot of fun to use!). In just two academic years, 
						more than 75% of students have used the site and they've left over 1,700 reviews! If you're a 
						current Bowdoin student, you can access the site 
						<a
							href="https://course-reviews.students.bowdoin.edu/"
							style={{ paddingLeft: "2px", marginLeft: "3px", textDecoration: "underline" }}
							target="_blank"
							rel="noreferrer"
						>
							here 
						</a>. Also, check out this 
						<a
							href="https://bowdoinorient.com/2023/11/10/wirsching-24-and-bookbinder-24-revamp-outdated-bowdoin-course-review-website/"
							style={{ paddingLeft: "2px", marginLeft: "3px", textDecoration: "underline" }}
							target="_blank"
							rel="noreferrer"
						>
							article 
						</a> published in Bowdoin's student
						newspaper to learn more about the project and how it's helping students!
					</p>
				</div>
				<img className="bcr-image" src={BCRImage} alt="Zane"/>
			</div>
			<div className="bcr-reviews">
				<h2>Student Reviews</h2>
				<div className="bcr-review-bubbles">
					{bcrReviews.map((review, index) => {
						return <p className="bcr-review" key={index} >"{review}"</p>
					})}
				</div>
			</div>
			<div className="bcr-timeline-images">
				<div className="bcr-images-left">
					<img
						className="bcr-department-image"
						alt="Bowdoin Course Reviews Department Page"
						src={BcrDepartmentPage}
					/>
					<img
						className="bcr-createreview-image"
						alt="Bowdoin Course Reviews Create Review Page"
						src={BcrCreateReviewPage}
					/>
					<img
						className="bcr-login-image"
						alt="Bowdoin Course Reviews Login Page"
						src={BcrLoginPage}
					/>
				</div>
				<div className="bcr-images-right">
					<img
						className="bcr-mobile-homepage-image"
						alt="Bowdoin Course Reviews Home Page"
						src={BcrMobileHomePage}
					/>
					<img
						className="bcr-mobile-stats-image"
						alt="Bowdoin Course Reviews Stats Page"
						src={BcrMobileStatsPage}
					/>
					<img
						className="bcr-mobile-profile-image"
						alt="Bowdoin Course Reviews Profile Page"
						src={BcrMobileProfilePage}
					/>
				</div>
			</div>
		</div>
	)
}

export default BCRPage;