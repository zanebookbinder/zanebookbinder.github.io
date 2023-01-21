import "./ResumePage.css"

function ResumePage() {
	return (
	  <div className="resume-page">
		<div className="resume-block">
			<div>
				<div className="download">
					<a 
						className="here-link"
						href="https://drive.google.com/file/d/1bSxDxnaEyKzFwzymyE8sTTSPhSatx5xR/view" 
						target="_blank"
						rel="noreferrer"
						>Download a copy</a>
				</div>
				<iframe className="resume-embed" title="my-resume" src="https://docs.google.com/document/d/1RYVTr9UIftXe9wNYGP4er3veGcPmxAIO/preview" allow="autoplay"  ></iframe>
			</div>
			
		</div>
		{/* <div className="download">
		</div> */}
	  </div>
	);
  }
  
  export default ResumePage;