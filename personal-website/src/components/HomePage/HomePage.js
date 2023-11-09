import "./HomePage.css";
import ZaneImage from "../../images/Zane-3.jpg";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import BcrCoursePage from "../../images/bcr-coursepage.png";
import BcrDepartmentPage from "../../images/bcr-department-page.png";
import BcrMobileHomePage from "../../images/bcr-mobile-homepage.png";
import BcrCreateReviewPage from "../../images/bcr-createreview.png";
import BcrMobileStatsPage from "../../images/bcr-mobile-statspage.png";
import BcrMobileProfilePage from "../../images/bcr-mobile-profilepage.png";

function HomePage() {
    const quickLinks = (
        <>
            <p className="small-text homePageText">
                I'm a senior at Bowdoin College majoring in <strong>Computer
                Science</strong> and minoring in Economics. I'm really passionate about 
                <strong> software</strong>, data, and AI. This summer, I worked as a Software
                Engineering Intern at Amazon (if you're from Seattle, send me a
                message!). I also launched my website, <strong>Bowdoin Course Reviews</strong>,
                in early November. I've put screenshots and more information below,
                so feel free to check those out! Please check out my bio, projects, and resume. I
                would love to connect!
            </p>
            <p className="quicklink-title">Check out my:</p>
            <div className="quicklinks">
                <Link to="/experience" state={{ scrollTo: "amazon" }}>
                    Recent internship
                </Link>
                <Link to="/aboutme" state={{ scrollTo: "skills" }}>
                    Technical skills
                </Link>
                <Link to="/experience" state={{ scrollTo: "datto" }}>
                    Previous internship
                </Link>
                <Link to="/experience" state={{ scrollTo: "GPS" }}>
                    Favorite past project
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
                    <div className="mobile-titles">
                        <h1 className="title">Hi, I'm Zane! </h1>
                        <h1 className="title">Nice to meet you!</h1>
                    </div>
                    <img className="zane-image" src={ZaneImage} alt="Zane" />
                </div>
                {quickLinks}
            </div>
            <div className="bcr-homepage">
                <div className="bcr-screenshot-div">
                    <img
                        className="bcr-screenshot"
                        alt="Bowdoin Course Reviews"
                        src={BcrCoursePage}
                    />
                </div>
                <div className="bcr-aboutme-text">
                    <h1
                        id="working-on-now"
                        className="working-on-now-title homepage-title"
                    >
                        Bowdoin Course Reviews
                    </h1>
                    <p className="small-text homePageText">
                        My current endeavor outside of school is creating a
                        <span> course review website </span>
                        for Bowdoin along with my co-creator
                        <a
                            href="https://www.oliviawirsching.com/"
                            style={{ paddingLeft: "2px", marginLeft: "3px" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Olivia
                        </a>
                        ! Every registration period, we heard friends and
                        classmates asking “Have you taken this class? How was
                        it?” or “Have you ever had Professor so and so? I've
                        heard she's pretty tough.” So, we decided to give
                        students a centralized and reliable place to shout out
                        their favorite professors or warn others about tough
                        courses they took. We launched the site in early November 2023,
                         and we've already heard that it is helping students
                        make well-informed decisions about course registration. If you're a 
                        current Bowdoin student, click 
                        <a
                            href="https://course-reviews.students.bowdoin.edu/"
                            style={{ paddingLeft: "2px", marginLeft: "3px", textDecoration: "underline" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            here 
                        </a> to access the site!
                    </p>
                </div>
            </div>
            <div className="bcr-timeline-div">
                <div className="bcr-timeline-left">
                    <h1 className="homepage-title">Our Development Timeline</h1>
                    <ul className="bcr-timeline">
                        <li className="bcr-timeline-item">
                            <h3 className="bcr-timeline-title">
                                December 2022
                            </h3>
                            <p className="bcr-timeline-text">
                                Olivia and I began planning out the website's
                                architecture and basic functionality. For the
                                site's tech stack, we chose a MySQL backend, a
                                Flask API, and a React frontend.
                            </p>
                        </li>
                        <li className="bcr-timeline-item left-arrow-icon">
                            <h3 className="bcr-timeline-title">January 2023</h3>
                            <p className="bcr-timeline-text">
                                We migrated the database from the 2012 version
                                of Bowdoin Course Reviews and hosted it on AWS
                                RDS. We then began working on the API and
                                frontend. We created a home page, course pages,
                                professor pages, and department pages.
                            </p>
                        </li>
                        <li className="bcr-timeline-item">
                            <h3 className="bcr-timeline-title">
                                February and March 2023
                            </h3>
                            <p className="bcr-timeline-text">
                                We added a login system, a create review page,
                                and a user profile page. With the help of
                                Professor Stephen Houser, we also moved the API
                                and front end to AWS App Runner.
                            </p>
                        </li>
                        <li className="bcr-timeline-item left-arrow-icon">
                            <h3 className="bcr-timeline-title">April 2023</h3>
                            <p className="bcr-timeline-text">
                                We started adding extra features: a stats page,
                                the ability to sort and filter review data, and
                                smooth loading animations.
                            </p>
                        </li>
                        <li className="bcr-timeline-item">
                            <h3 className="bcr-timeline-title">May 2023</h3>
                            <p className="bcr-timeline-text">
                                We improved the site's UI by making it fully
                                responsive and fixing visual bugs. We asked a
                                small group of family and friends to test the
                                site and give us feedback.
                            </p>
                        </li>
                        <li className="bcr-timeline-item">
                            <h3 className="bcr-timeline-title">
                                Summer 2023
                            </h3>
                            <p className="bcr-timeline-text">
                                We made small bug fixes, iterated on our UI, and
                                began working on a login system.
                            </p>
                        </li>
                        <li className="bcr-timeline-item">
                            <h3 className="bcr-timeline-title">
                                September and October 2023
                            </h3>
                            <p className="bcr-timeline-text">
                                We integrated our site with Okta for login and 
                                session management! Bowdoin students can now login
                                to the website with their school account.
                            </p>
                        </li>
                        <li className="bcr-timeline-item">
                            <h3 className="bcr-timeline-title">November 6, 2023</h3>
                            <p className="bcr-timeline-text">
                                We launched the site to Bowdoin's 1,900 students and
                                received a ton of positive feedback, including that 
                                the site "looks like a spaceship" and that using it 
                                is a "very smooth software experience." In the first three 
                                days after launch, we received 500 unique site visitors, 
                                nearly 400 new reviews for courses, and over 1,600 home page 
                                hits.
                            </p>
                        </li>
                        <li className="bcr-timeline-item">
                            <h3 className="bcr-timeline-title">What's next?</h3>
                            <p className="bcr-timeline-text">
                                We will fix any bugs that arise on the site and 
                                continue to add features. One idea we want to implement is
                                a 'Next Semester' page where people can plan their schedule 
                                for the next semester by looking at class times and availability,
                                all in one place.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="bcr-timeline-images">
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
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
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
        </div>
    );
}

export default HomePage;
