import "./HomePage.css";
import "./HomePageMobile.css";
import ZaneImage from "../../images/Zane-3.jpg";
import BCRImage from "../../images/BCR.png";
import { Link } from "react-router-dom";
import Typed from "react-typed";
// import BcrCoursePage from "../../images/bcr-coursepage.png";
import BcrDepartmentPage from "../../images/bcr-department-page.png";
import BcrMobileHomePage from "../../images/bcr-mobile-homepage.png";
import BcrCreateReviewPage from "../../images/bcr-createreview.png";
import BcrMobileStatsPage from "../../images/bcr-mobile-statspage.png";
import BcrMobileProfilePage from "../../images/bcr-mobile-profilepage.png";
import BcrLoginPage from "../../images/bcr-login.png";
import Timeline from "./Timeline";

function HomePage() {
    const quickLinks = (
        <>
            <p className="small-text homePageText">
                I'm a senior at Bowdoin College majoring in Computer
                Science and minoring in Economics. I'm really passionate about 
                software, data, and AI. This summer, I worked as a Software
                Engineering Intern at Amazon. I also launched a website, Bowdoin Course Reviews,
                in early November. I've put screenshots and more information below,
                so feel free to take a look! Please check out my bio, projects, and resume. I
                would love to connect!
            </p>
            <p className="quicklink-title">CHECK OUT MY</p>
            <div className="quicklinks button">
                <Link to="/experience" state={{ scrollTo: "amazon" }}>
                    2023 Internship
                </Link>
                <Link to="/aboutme" state={{ scrollTo: "skills" }}>
                    Technical Skills
                </Link>
                <Link to="/experience" state={{ scrollTo: "GPS" }}>
                    Favorite Project
                </Link>
            </div>
        </>
    );

    return (
        <div className="all-homepage">
            <div className="desktop-top-section">
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
                    {quickLinks}
                </div>
                <img className="zane-image" src={ZaneImage} alt="Zane" />
            </div>
            <div className="mobile-top-section">
                <div className="mobile-top">
                    <img className="zane-image" src={ZaneImage} alt="Zane" />
                    <div className="mobile-titles">
                        <h1 className="title">Hi, I'm Zane! </h1>
                        <h1 className="title">Nice to meet you!</h1>
                    </div>
                </div>
                {quickLinks}
            </div>
            
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
                        So, we decided to give
                        students a centralized and reliable place to shout out
                        their favorite professors or warn others about tough
                        courses they took. <br/> <br/> We launched the site in early November 2023,
                         and we've already heard that it's helping students
                        make well-informed decisions about course registration. Almost half of the student
                        body has used the site and we've receive over 750 reviews in just two months! If you're a 
                        current Bowdoin student, you can click 
                        <a
                            href="https://course-reviews.students.bowdoin.edu/"
                            style={{ paddingLeft: "2px", marginLeft: "3px", textDecoration: "underline" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            here 
                        </a> to access the site. Also, check out the 
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
    );
}

export default HomePage;
