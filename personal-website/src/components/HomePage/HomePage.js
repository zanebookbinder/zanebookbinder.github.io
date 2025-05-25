import "./HomePage.css";
import "./HomePageMobile.css";
import ZaneImage from "../../images/Zane-3.jpg";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import HomePageBlock from "./HomePageBlock.js";
import BCRImage from "../../images/bcr-demo.jpg";
import AmazonImage from "../../images/amazon-intern.jpg";
import UngatedImage from "../../images/ungated.jpg";
import DattoImage from "../../images/bridgewater.jpg";
import BTBImage from "../../images/beating-the-bookies.jpg";

function HomePage() {
    const quickLinks = (
        <>
            <p className="small-text homePageText">
                I'm a Software Engineer in NYC working at Bridgewater
                Associates. I recently graduated from Bowdoin College, where I
                majored in Computer Science and minored in Economics. I've worked
                on projects in many areas including Backend Services, Web Developement, 
                and Machine Learning. Feel free to check out my bio,
                projects, and resume. I would love to connect!
            </p>
            <p className="quicklink-title">CHECK OUT MY</p>
            <div className="quicklinks button">
                <Link to="/experience#bridgewater">
                    Current Role
                </Link>
                <Link to="/aboutme#skills">
                    Technical Skills
                </Link>
                <Link to="/experience#bcr">
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
                    title="Bridgewater Associates"
                    image={DattoImage}
                    position="Software Engineer"
                    description="Designing and building applications to support systemized trading strategies"
                    link="datto"
                />
                <HomePageBlock
                    title="Bowdoin Course Reviews"
                    image={BCRImage}
                    position="Independent Project"
                    description="Helping over 70% of Bowdoin students get the most out of their education"
                    link="bcr"
                />
                <HomePageBlock
                    title="Amazon"
                    image={AmazonImage}
                    position="SWE Internship"
                    description="Protecting Amazon seller data with a full-stack onboarding and configuration app"
                    link="amazon"
                />
                <HomePageBlock
                    title="Ungated Research"
                    image={UngatedImage}
                    position="Collaborative Study"
                    description="Providing equitable access to 2500+ Economics research articles"
                    link="ungated"
                />
                <HomePageBlock
                    title="Beating the Books"
                    image={BTBImage}
                    position="Class Project (Financial Machine Learning)"
                    description="Combining NBA stat data with sportsbook data to build a profitable betting strategy"
                    link="fml-final-project"
                />
            </div>
        </div>
    );
}

export default HomePage;
