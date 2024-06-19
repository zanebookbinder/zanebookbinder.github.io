import BCRImage from "../../images/BCR.png";
import BcrDepartmentPage from "../../images/bcr-department-page.png";
import BcrMobileHomePage from "../../images/bcr-mobile-homepage.png";
import BcrCreateReviewPage from "../../images/bcr-createreview.png";
import BcrMobileStatsPage from "../../images/bcr-mobile-statspage.png";
import BcrMobileProfilePage from "../../images/bcr-mobile-profilepage.png";
import BcrLoginPage from "../../images/bcr-login.png";
import Timeline from "./Timeline";
import "./BCRPage.css";
import "../HomePage/HomePageMobile.css";
import { useLayoutEffect } from "react";

function BCRPage() {

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	});

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
						My current endeavor outside of school is managing a
						course review website 
						that I created with my classmate
						<a
							href="https://www.oliviawirsching.com/"
							style={{ paddingLeft: "2px", marginLeft: "3px" }}
							target="_blank"
							rel="noreferrer"
						>
							Olivia
						</a>
						{' '}for our college! Every registration period, we heard friends and
						classmates asking
						<span style={{fontStyle: "italic", fontWeight: 400}}> “Have you taken this class? How was  it?” </span>
						We wanted to give
						students a centralized and reliable place to shout out
						their favorite professors or warn others about tough
						courses they took. <br/> <br/> We launched the site in early November 2023,
							and we've already heard that it's helping students
						make well-informed decisions about course registration. In just one academic year, 
						more than 2/3 of the student body has used the site and we've receive over 900 reviews! If you're a 
						current Bowdoin student, you can click 
						<a
							href="https://course-reviews.students.bowdoin.edu/"
							style={{ paddingLeft: "2px", marginLeft: "3px", textDecoration: "underline" }}
							target="_blank"
							rel="noreferrer"
						>
							here 
						</a> to access the site. Also, check out this 
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
			<Timeline/>
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