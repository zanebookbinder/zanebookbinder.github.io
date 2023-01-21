import { useState } from "react";
import "./ResumePage.css"

function ResumePage() {

	const [resumeLoaded, setResumeLoaded] = useState(false);

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
					title="my-resume" 
					src="https://docs.google.com/document/d/1RYVTr9UIftXe9wNYGP4er3veGcPmxAIO/preview" 
					allow="autoplay" 
					onLoad={() => {setResumeLoaded(true)}}
				></iframe>
			</div>
			
		</div>
		{/* <div className="download">
		</div> */}
	  </div>
	);
  }
  
  export default ResumePage;