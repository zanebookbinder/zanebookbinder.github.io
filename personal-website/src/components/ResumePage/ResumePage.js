import "./ResumePage.css"
import { useState } from "react";

function ResumePage() {

	const [resumeLoaded, setResumeLoaded] = useState(false);

	const handleLoad = () => {
		setResumeLoaded(true);
	};

	return (
	  <div className="resume-page">
		<div className="resume-block">
			<div>
				{resumeLoaded &&
					<div className="download">
						<a 
							className="here-link"
							href="https://drive.google.com/file/d/1bSxDxnaEyKzFwzymyE8sTTSPhSatx5xR/view" 
							target="_blank"
							rel="noreferrer"
							>Download a copy</a>
					</div>
				}
				<iframe
					className="resume-embed"
					onLoad={handleLoad}
					title="my-resume"
					src="https://drive.google.com/file/d/1bSxDxnaEyKzFwzymyE8sTTSPhSatx5xR/preview"
					allow="autoplay"
				></iframe>
			</div>		
		</div>
	  </div>
	);
  }
  
  export default ResumePage;