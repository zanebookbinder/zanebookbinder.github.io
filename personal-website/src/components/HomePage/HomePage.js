import "./HomePage.css";
import "./HomePageMobile.css";
import ZaneImage from "../../images/Zane-3.jpg";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import HomePageBlock from "./HomePageBlock.js";
import BCRImage from "../../images/BCR.png";
import AmazonImage from "../../images/amazon-intern.jpeg";
import UngatedImage from "../../images/ungated-logo-full.png";
import DattoImage from "../../images/datto-logo.png";
import BTBImage from "../../images/beating-the-bookies.png";

function HomePage() {
    const quickLinks = (
        <>
            <p className="small-text homePageText">
                I'm a Software Engineer in NYC working at Bridgewater
                Associates. I recently graduated from Bowdoin College, where I
                majored in Computer Science and minored in Economics. I have
                experience in many areas including Web Development, Data
                Science, and Machine Learning. Please check out my bio,
                projects, and resume. I would love to connect!
            </p>
            <p className="quicklink-title">CHECK OUT MY</p>
            <div className="quicklinks button">
                <Link to="/experience" state={{ scrollTo: "amazon" }}>
                    2023 Internship
                </Link>
                <Link to="/aboutme" state={{ scrollTo: "skills" }}>
                    Technical Skills
                </Link>
                <Link to="/experience" state={{ scrollTo: "bcr" }}>
                    Recent Project
                </Link>
            </div>
        </>
    );

    return (
        <div className="all-homepage">
            <div className="desktop-top-section">
                <div className="homepage-top">
                    <Typed
                        strings={[
                            "Hi, I'm Zane! ^750 Nice to meet you!^1000",
                            "Hi, I'm Zane!",
                        ]}
                        element="h1"
                        className="header typed-title hi-im-zane"
                        typeSpeed={60}
                        backSpeed={50}
                        onComplete={(instance) => {
                            setTimeout(() => {
                                instance.cursor.remove();
                            }, 1000);
                        }}
                    />
                    <h1 className="header nontyped-title hi-im-zane">
                        Hi, I'm Zane!
                    </h1>
                    {quickLinks}
                </div>
                <img className="zane-image" src={ZaneImage} alt="Zane" />
            </div>
            <div className="mobile-top-section">
                <div className="mobile-top">
                    <img className="zane-image" src={ZaneImage} alt="Zane" />
                    <div className="mobile-titles">
                        <h1 className="title hi-im-zane">Hi, I'm Zane! </h1>
                    </div>
                </div>
                {quickLinks}
            </div>

            <div className="home-page-blocks">
                <HomePageBlock
                    title="Bowdoin Course Reviews"
                    image={BCRImage}
                    position="Independent Project"
                    description="A full-stack website that allows Bowdoin students to review courses and learn from other students’ reviews"
                    link="bcr"
                />
                <HomePageBlock
                    title="Amazon"
                    image={AmazonImage}
                    position="SWE Internship"
                    description="Independently built a full-stack onboarding app involving 8+ AWS Services"
                    link="amazon"
                />
                <HomePageBlock
                    title="Ungated Research"
                    image={UngatedImage}
                    position="Collaborative Study"
                    description="A website that provides equitable access to 2500+ Economics research articles"
                    imageBorder
                    link="ungated"
                />
                <HomePageBlock
                    title="Datto"
                    image={DattoImage}
                    position="Data Engineering Internship"
                    description="Migrated a database and pipeline from MySQL to Snowflake"
                    imageBorder
                    link="datto"
                />
                <HomePageBlock
                    title="Beating the Books"
                    image={BTBImage}
                    position="Final Class Project (Financial Machine Learning)"
                    description="Combined NBA stat data with sportsbook data to build a profitable betting strategy"
                    link="fml-final-project"
                />
            </div>
        </div>
    );
}

export default HomePage;
