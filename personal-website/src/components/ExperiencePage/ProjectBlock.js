import { FaGithub, FaGlobe, FaAppStoreIos } from "react-icons/fa";
import BowdoinLogo from "../../images/bowdoin-logo.png";
import BCRLogo from "../../images/logo192.png";
import UngatedLogo from "../../images/ungated-logo.png";
import { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "../CustomAccordion";
import HighlightBlock from "../HighlightBlock";
import "./ProjectBlock.css";

function ProjectBlock({
    title,
    date,
    image,
    images,
    programmingLanguages,
    details,
    link,
    liveLink,
    liveIcon,
    startOpen,
}) {
    let expandedStart = false;
    if (startOpen) {
        expandedStart = true;
    }

    const [expanded, setExpanded] = useState(expandedStart);

    let linkImage = <FaGithub className="logo" fontSize={29} />;

    if (link && link.includes("sbarker")) {
        linkImage = (
            <img src={BowdoinLogo} alt="Bowdoin Logo" className="logo" />
        );
    } else if (link && link.includes("course-reviews")) {
        linkImage = (
            <img
                src={BCRLogo}
                alt="Bowdoin Course Reviews Logo"
                className="logo bcr-logo"
            />
        );
    } else if (link && link.includes("ungated")) {
        linkImage = (
            <img
                src={UngatedLogo}
                alt="Ungated Research Logo"
                className="logo ungated-logo"
            />
        );
    }

    // prefer the project's own favicon/app icon; fall back to a generic mark
    let liveLinkImage = <FaGlobe className="logo" fontSize={29} />;

    if (liveIcon) {
        liveLinkImage = (
            <img
                src={liveIcon}
                alt={`${title} icon`}
                className="logo project-favicon"
            />
        );
    } else if (liveLink && liveLink.includes("apps.apple.com")) {
        liveLinkImage = <FaAppStoreIos className="logo" fontSize={29} />;
    }

    return (
        <Accordion
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}
            className={expanded ? "project-expanded" : ""}
            style={{ minHeight: "45px" }}
        >
            <AccordionSummary>
                <div className="project-title">
                    <h3 className="project-name">{title}</h3>
                    <div className="project-title-right">
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                                title={`${title} code`}
                            >
                                {linkImage}
                            </a>
                        )}
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                                title={`${title} live site`}
                            >
                                {liveLinkImage}
                            </a>
                        )}
                        <p className="date">{date}</p>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div className="project-details">
                    {(image || images) && (
                        <div className="project-image-wrapper">
                            {(() => {
                                const content = images ? (
                                    <div className="project-screenshots-row">
                                        {images.map((src, i) => (
                                            <img
                                                key={i}
                                                src={src}
                                                alt={`${title} screenshot ${i + 1}`}
                                                className="project-image vertical-project-screenshot"
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <img
                                        src={image}
                                        alt={`${title} screenshot`}
                                        className="project-image"
                                    />
                                );
                                return link ? (
                                    <a href={link} target="_blank" rel="noreferrer">
                                        {content}
                                    </a>
                                ) : (
                                    content
                                );
                            })()}
                        </div>
                    )}
                    <div className="project-text">
                        <div className="programming-languages">
                            {programmingLanguages.map((detail, index) => {
                                return (
                                    <HighlightBlock key={index} text={detail} />
                                );
                            })}
                        </div>
                        <div className="description">
                            <ul>
                                {details.map((detail, index) => {
                                    return (
                                        <li className="detail" key={index}>
                                            {detail}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

export default ProjectBlock;
