import "./ResumePage.css"
import { useEffect, useState } from "react";

function ResumePage() {

	const [resumeLoaded, setResumeLoaded] = useState(false);

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
				{resumeLoaded &&
					<div className="download">
						<a 
							className="here-link"
							href="https://drive.google.com/file/d/1_a_NEbEeielst4NDhNF7qdx9K1x4O5lm/view" 
							target="_blank"
							rel="noreferrer"
							>Download a copy</a>
					</div>
				}
				<iframe
					className="resume-embed"
					onLoad={handleLoad}
					title="my-resume"
					src="https://drive.google.com/file/d/1_a_NEbEeielst4NDhNF7qdx9K1x4O5lm/preview"
					allow="autoplay"
				></iframe>
			</div>		
		</div>
	  </div>
	);
  }
  
  export default ResumePage;