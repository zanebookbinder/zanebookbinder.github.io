import "./ResumePage.css";
import { useEffect, useState } from "react";

function ResumePage() {
    const [resumeLoaded, setResumeLoaded] = useState(false);

    const googleDriveResumeLink =
        "https://drive.google.com/file/d/1KURXFVMHgnceYh2FhnUgWPfSh89tWe-h/";

    const handleLoad = () => {
        setResumeLoaded(true);
    };

    useEffect(() => {
        document.title = "Resume | Zane Bookbinder";
    }, []);

    return (
        <div className="resume-page">
            <div className="resume-block">
                <div>
                    {resumeLoaded && (
                        <div className="download">
                            <a
                                className="here-link"
                                href={googleDriveResumeLink + "view"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Download a copy
                            </a>
                        </div>
                    )}
                    <iframe
                        className="resume-embed"
                        onLoad={handleLoad}
                        title="my-resume"
                        src={googleDriveResumeLink + "preview"}
                        allow="autoplay"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ResumePage;
